import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import {
  Box,
  Container,
  Flex,
  Section,
  Text,
} from "./ui"


interface HeroData {
  kicker: string
  head: string
  text: string
  image: IGatsbyImageData
  alt: string
}

export default function Hero() {
  const queryData = useStaticQuery(graphql`
    query {
      dataJson {
        hero {
          alt
          head
          kicker
          text
        }
      }
      allImageSharp(filter: {fixed: {originalName: {regex: "/Hero/"}}}) {
        nodes {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const data: HeroData = {
    ...queryData.dataJson.hero,
    image: queryData.allImageSharp.nodes[0].gatsbyImageData
  }

  const image = getImage(data.image)

  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {image ?
              <GatsbyImage
                alt={data.alt}
                image={image}
              />
              : null}
          </Box>
          <Box width="half">
            <Text as="h2" variant="heading">
              {data.kicker && <Text variant="kicker">{data.kicker}</Text>}
              {data.head}
            </Text>
            <Text as="p">{data.text}</Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

