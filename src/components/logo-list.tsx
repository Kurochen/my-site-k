import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import {
  Space,
  Container,
  Section,
  FlexList,
  Text,
  Link,
} from "./ui"
import { LogoItem } from "./logo-item";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface LogoListData {
  heading: string,
  linkMore: string,
  linkText: string,
  logos: LogosData[]
}

export interface LogosData {
  id: string,
  alt: string,
  image: IGatsbyImageData,
  imageMono: IGatsbyImageData,
  link: string,
  size: string
}

export default function LogoList() {
  const queryData = useStaticQuery(graphql`
    query {
      dataJson {
        logoList {
          heading
          linkMore
          linkText
          logos {
            alt
            id
            image
            imageMono
            link
          }
        }
      }
      allFile(filter: {relativeDirectory: {eq: "logos"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
              fixed {
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const mergeArr = (a1: any[], a2: any[]): any[] =>
    a1.map(itm => ({
      image2: a2.find((item) => (item.node.childImageSharp.fixed.originalName === itm.image)),
      imageMono2: a2.find((item) => (item.node.childImageSharp.fixed.originalName === itm.imageMono)),
      ...itm
    }));

  const mergeData = mergeArr(queryData.dataJson.logoList.logos, queryData.allFile.edges)

  const data: LogoListData = {
    heading: queryData.dataJson.logoList.heading,
    linkMore: queryData.dataJson.logoList.linkMore,
    linkText: queryData.dataJson.logoList.linkText,
    logos: mergeData.map(i => ({
      size: "medium",
      id: i.id,
      alt: i.alt,
      link: i.link,
      image: i.image2.node.childImageSharp.gatsbyImageData,
      imageMono: i.imageMono2.node.childImageSharp.gatsbyImageData
    }))
  }

  return (
    <Section paddingY={4}>
      <Container width="narrow">
        {data.heading && (
          <Text center variant="lead">
            {data.heading}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {data.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
        <Space size={4} />
        <Text center variant="body">
          <Link to={data.linkMore} target="_blank">{data.linkText}</Link>
        </Text>
      </Container>
    </Section>
  )
}
