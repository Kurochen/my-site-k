import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import {
    Space,
    Container,
    Section,
    FlexList,
    Text,
    Logo,
    HomepageImage,
} from "./ui"
import * as styles from "./logo-list.css"
import { LogoItem } from "./logo-item";

export interface LogoItemProps {
    id: string
    alt: string
    image: HomepageImage
}


export interface LogoListProps {
    text?: string
    logos: LogoItemProps[]
}

export default function LogoList(props: LogoListProps) {
    const data = useStaticQuery(graphql`
    query {
      dataJson {
        logoList {
          alt
          id
          image
          imageMono
        }
      }
      allFile(filter: {relativeDirectory: {eq: "logos"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
              fixed {
                originalName
              }
            }
          }
        }
      }
    }
  `)



    const mergeData = (a1, a2) =>
        a1.map(itm => ({
            imageName: a2.find((item) => (item.node.childImageSharp.fixed.originalName === itm.image))?.node.childImageSharp.gatsbyImageData,
            imageMono2: a2.find((item) => (item.node.childImageSharp.fixed.originalName === itm.imageMono))?.node.childImageSharp.gatsbyImageData,
            ...itm
        }));


    const data2 = mergeData(data.dataJson.logoList, data.allFile.edges)

    console.log("data2", data2)

    return (

        <Section paddingY={4}>
            <Container width="narrow">
                {props.text && (
                    <Text center variant="lead">
                        {props.text}
                    </Text>
                )}
                <Space size={4} />
                <FlexList gap={4} variant="center">
                    {data2.map(
                        (logo) =>
                            logo && (
                                <li key={logo.id}>
                                    <LogoItem {...logo} />
                                </li>
                            )
                    )}
                </FlexList>
            </Container>
        </Section>
    )
}
