import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { FlexList } from "./ui"
import { LogoItem, LogosData } from "./logo-item";

export interface SocialListData {
    icons: LogosData[]
}



export default function SocialList() {
    const queryData = useStaticQuery(graphql`
    query {
      dataJson {
        socialList {
          icons {
            alt
            id
            image
            imageMono
            link
          }
        }
      }
      allFile(filter: {relativeDirectory: {eq: "social"}}) {
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

    const mergeData = mergeArr(queryData.dataJson.socialList.icons, queryData.allFile.edges)


    const data: SocialListData = {

        icons: mergeData.map(i => ({
            size: "small",
            id: i.id,
            alt: i.alt,
            link: i.link,
            image: i.image2.node.childImageSharp.gatsbyImageData,
            imageMono: i.imageMono2.node.childImageSharp.gatsbyImageData
        }))
    }

    return (
        <FlexList >
            {data.icons.map(
                (icon) =>
                    icon && (
                        <li key={icon.id}>
                            <LogoItem {...icon} />
                        </li>
                    )
            )}
        </FlexList>
    )
}
