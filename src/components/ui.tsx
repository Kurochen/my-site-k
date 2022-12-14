import * as React from "react"
import * as styles from "./ui.css"
import { Radii, SpaceTokens } from "../theme.css"
import isAbsoluteURL from "is-absolute-url"
import { Link as GatsbyLink } from "gatsby"

import {
    GatsbyImage,
    GatsbyImageProps,
    getImage,
    IGatsbyImageData,
    ImageDataLike,
} from "gatsby-plugin-image"


export interface HomepageLink {
    id: string
    href: string
    url: string
    text: string
}

export interface HomepageImage {
    id: string
    alt: string
    gatsbyImageData: IGatsbyImageData
    url: string
}




export const cx = (...args: (string | undefined)[]) =>
    args.filter(Boolean).join(" ")

type WithChildren<T = {}> = T & { children?: React.ReactNode }

interface BaseProps {
    as?: React.ElementType | React.FC
    cx?: string[]
    className?: string
}

export function Base({
    as: Component = "div",
    cx: _cx = [],
    className,
    ...props
}: BaseProps) {
    return <Component className={cx(..._cx, className)} {...props} />
}

interface ContainerProps extends BaseProps {
    width?: styles.Containers
}

export function Container({
    width = "normal",
    ...props
}: WithChildren<ContainerProps>) {
    return <Base cx={[styles.containers[width]]} {...props} />
}

interface FlexProps extends BaseProps {
    variant?: styles.FlexVariants
    gap?: SpaceTokens
    gutter?: SpaceTokens
    wrap?: boolean
    responsive?: boolean
    marginY?: SpaceTokens
    alignItems?: styles.FlexVariants
}


export function Flex({
    variant,
    gap = 3,
    gutter,
    wrap,
    responsive,
    marginY,
    alignItems,
    cx: _cx = [],
    ...props
}: WithChildren<FlexProps>) {
    return (
        <Base
            cx={[
                styles.flex,
                variant && styles.flexVariants[variant],
                responsive && styles.flexVariants.responsive,
                wrap && styles.flexVariants.wrap,
                gutter && styles.gutter[gutter],
                gutter ? styles.flexGap[0] : styles.flexGap[gap],
                marginY && styles.marginY[marginY],
                alignItems && styles.flexVariants[alignItems],
                ..._cx,
            ]}
            {...props}
        />
    )
}

interface FlexListProps extends FlexProps { }

export function FlexList(props: WithChildren<FlexListProps>) {
    return <Flex as="ul" cx={[styles.list]} {...props} />
}

interface BoxProps extends BaseProps {
    width?: styles.Widths
    background?: styles.Backgrounds
    padding?: SpaceTokens
    paddingY?: SpaceTokens
    radius?: Radii
    center?: boolean
    order?: 0 | 1 | 2 | 3
}

export function Box({
    width = "full",
    background,
    padding,
    paddingY,
    radius,
    center = false,
    order,
    cx: _cx = [],
    ...props
}: WithChildren<BoxProps>) {
    return (
        <Base
            cx={[
                styles.widths[width],
                background && styles.backgrounds[background],
                padding && styles.padding[padding],
                paddingY && styles.paddingY[paddingY],
                radius && styles.radii[radius],
                center && styles.box.center,
                order && styles.order[order],
                ..._cx,
            ]}
            {...props}
        />
    )
}
interface SectionProps extends BoxProps { }

export function Section(props: WithChildren<SectionProps>) {
    return <Box as="section" className={styles.section} {...props} />
}

interface TextProps extends BaseProps {
    variant?: styles.TextVariants
    center?: boolean
    bold?: boolean
}

export function Text({
    variant = "body",
    center = false,
    bold = false,
    ...props
}: WithChildren<TextProps>) {
    return (
        <Base
            cx={[
                styles.text[variant],
                center && styles.text.center,
                bold && styles.text.bold,
            ]}
            {...props}
        />
    )
}

interface LinkProps extends BaseProps {
    to?: string
    href?: string
    target?: string
}

export function Link({ to, href, ...props }: WithChildren<LinkProps>) {
    const url = href || to || ""
    if (isAbsoluteURL(url)) {
        return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a href={url} className={styles.link} {...props} />
        )
    }
    return <GatsbyLink to={url} className={styles.link} {...props} />
}

export function NavLink({ ...props }) {
    return <Base as={Link} cx={[styles.navlink]} {...props} />
}

export function IconLink(props) {
    return <NavLink cx={[styles.iconLink]} {...props} />
}


interface ButtonProps extends BaseProps {
    variant?: styles.ButtonVariants
    href?: string
    to?: string
}

export function Button({
    variant = "primary",
    ...props
}: WithChildren<ButtonProps>) {
    return <Base as={Link} cx={[styles.buttons[variant]]} {...props} />
}

interface ButtonListProps extends BaseProps {
    links: HomepageLink[]
    variant?: styles.FlexVariants
    reversed?: boolean
}

export function ButtonList({
    links = [],
    reversed = false,
    ...props
}: ButtonListProps) {
    const getVariant = (i): styles.ButtonVariants => {
        if (reversed) {
            return i === 0 ? "reversed" : "linkReversed"
        }
        return i === 0 ? "primary" : "link"
    }
    return (
        <FlexList marginY={4} {...props}>
            {links &&
                links.map((link, i) => (
                    <li key={link.id}>
                        <Button href={link.href} variant={getVariant(i)}>
                            {link.text}
                        </Button>
                    </li>
                ))}
        </FlexList>
    )
}

interface SpaceProps extends BaseProps {
    size?: SpaceTokens | "auto"
}

export function Space({ size = "auto", ...props }: SpaceProps) {
    return <Base cx={[styles.margin[size]]} {...props} />
}

interface LogoProps extends GatsbyImageProps {
    size: styles.LogoSizes
}

export function Logo({ alt, image, size = "small" }: LogoProps) {
    return (
        <GatsbyImage
            alt={alt}
            image={getImage(image)}
            className={styles.logos[size]}
        />
    )
}

