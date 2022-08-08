import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    Container,
    Section,
    Flex,
    Box,
    Text,
    ButtonList,
    HomepageImage,
    HomepageLink,
} from "./ui"

export interface FeatureDataProps {
    id: string
    // image?: HomepageImage
    image?: string
    kicker?: string
    heading: string
    text: string
    links: HomepageLink[]
}

interface FeatureProps {
    flip: boolean
}

export default function Feature(props: FeatureDataProps & FeatureProps) {
    return (
        <Section padding={4} background="muted">
            <Container>
                <Flex gap={4} variant="responsive">
                    <Box width="half" order={props.flip ? 1 : null}>
                        {props.gatsbyImageData && (
                            <GatsbyImage
                                // alt={props.image.alt}
                                image={getImage(props.gatsbyImageData)}
                            />
                        )}
                    </Box>
                    <Box width="half">
                        <Text as="h3" variant="subhead">
                            {props.kicker && <Text variant="kicker">{props.kicker}</Text>}
                            {props.heading}
                        </Text>
                        <Text as="p">{props.text}</Text>
                        <ButtonList links={props.links} />
                    </Box>
                </Flex>
            </Container>
        </Section>
    )
}
