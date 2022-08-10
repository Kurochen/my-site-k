import * as React from "react"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import {
    Container,
    Section,
    Flex,
    Box,
    Text
} from "./ui"
import { FeaturesData } from "./feature-list"

interface FeatureProps {
    flip: boolean
}

export default function Feature(props: FeaturesData & FeatureProps) {
    const image = getImage(props.image)

    return (
        <Section padding={4} background="muted">
            <Container>
                <Flex gap={4} variant="responsive">
                    <Box width="half" order={props.flip ? 1 : 0}>
                        {image ?
                            <GatsbyImage
                                alt={props.heading}
                                image={image}
                            />
                            : null
                        }
                    </Box>
                    <Box width="half">
                        <Text as="h3" variant="subhead">
                            {props.kicker && <Text variant="kicker">{props.kicker}</Text>}
                            {props.heading}
                        </Text>
                        <Text as="p">{props.text}</Text>
                    </Box>
                </Flex>
            </Container>
        </Section>
    )
}
