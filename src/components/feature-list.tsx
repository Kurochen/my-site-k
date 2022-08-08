import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Box, Text } from "./ui"
import Feature, { FeatureDataProps } from "./feature"

export interface FeatureListProps {
  kicker?: string
  heading: string
  text?: string
  content: FeatureDataProps[]
}

const data3 = {
  kicker: "feature",
  heading: "Преимущества"
}

export default function FeatureList(props: FeatureListProps) {

  const data = useStaticQuery(graphql`
    query {
      allFeatureListJson(sort: {fields: jsonId, order: DESC}) {
        nodes {
          imageName
          text
          jsonId
          kicker
          heading
        }
      }
      allImageSharp(filter: {fixed: {originalName: {regex: "/^feature/"}}}) {
        nodes {
          gatsbyImageData
          fixed {
            originalName
          }
        }
      }
    }
  `)

  const mergeById = (a1, a2) =>
    a1.map(itm => ({
      ...a2.find((item) => (item.fixed.originalName === itm.imageName) && item),
      ...itm
    }));

  const data2 = mergeById(data.allFeatureListJson.nodes, data.allImageSharp.nodes)




  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Text variant="kicker">Feature</Text>
          <Text as="h2" variant="heading">Преимущества</Text>
        </Box>
        {data2.map((feature, i) => (
          <Feature key={feature.jsonId} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}
