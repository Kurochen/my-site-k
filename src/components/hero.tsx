import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import {
    Box,
    ButtonList,
    Container,
    Flex,
    HomepageImage,
    HomepageLink,
    Section,
    Text,
} from "./ui"

export interface HeroProps {
    image?: HomepageImage
    kicker?: string
    h1: string
    subhead?: string
    text: string
    links?: HomepageLink[]
}

const ssrc = "../images/Hero.webp"

export default function Hero(props: HeroProps) {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="responsive">
                    <Box width="half">
                        <StaticImage
                            src={ssrc}
                            alt="A dinosaur"
                            placeholder="blurred"
                        />
                    </Box>
                    <Box width="half">
                        <Text as="h2" variant="heading">
                            {props.kicker && <Text variant="kicker">{props.kicker}</Text>}
                            {props.h1}
                        </Text>
                        <Text as="h3" variant="subhead">{props.subhead}</Text>
                        <Text as="p">{props.text}</Text>
                        {/* <ButtonList links={props.links} /> */}
                    </Box>
                </Flex>
            </Container>
        </Section>
    )
}

