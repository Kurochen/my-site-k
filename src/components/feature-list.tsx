import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Box, Text } from "./ui"
import Feature from "./feature"
import { IGatsbyImageData } from "gatsby-plugin-image"

export interface FeatureListData {
  kicker: "string",
  heading: "string",
  features: FeaturesData[]
}

export interface FeaturesData {
  id: string,
  image: IGatsbyImageData,
  kicker: string,
  heading: string,
  text: string
}


export default function FeatureList() {

  const queryData = useStaticQuery(graphql`
  query {
    dataJson {
      featureList {
        heading
        kicker
        features {
          heading
          id
          imageName
          kicker
          links
          text
        }
      }
    }
    allFile(filter: {relativeDirectory: {eq: "features"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          fixed {
            originalName
          }
        }
      }
    }
  }
`)

  function mergeArr(data: any[], imgs: any[]): any[] {
    return data.map(d => ({
      ...imgs.find((i) => (i.childImageSharp.fixed.originalName === d.imageName)),
      ...d
    }))
  }

  const mergeData = mergeArr(queryData.dataJson.featureList.features,
    queryData.allFile.nodes)


  const data: FeatureListData = {
    kicker: queryData.dataJson.featureList.kicker,
    heading: queryData.dataJson.featureList.heading,
    features: mergeData.map(i => ({
      id: i.id,
      heading: i.heading,
      kicker: i.kicker,
      text: i.text,
      image: i.childImageSharp.gatsbyImageData,
    }))
  }

  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Text variant="kicker">{data.kicker}</Text>
          <Text as="h2" variant="heading">{data.heading}</Text>
        </Box>
        {data.features.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}
