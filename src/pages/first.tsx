import * as React from "react"
import FeatureList from "../components/feature-list"
import Hero from "../components/hero"
import Layout from "../components/layout"

const dataLink = {
    id: "string",
    href: "string",
    url: "string",
    text: "string"
}

const dataFirst = {
    h1: "Ультра быстрые сайты Gatsby",
    text: "Попробуйте один из самых быстрых сайтов на платформе Gatsby",
    links: [dataLink, dataLink]
}

function FirstPage() {
    return (
        <Layout title="First page">
            <Hero
                {...dataFirst}
            />
            <FeatureList />
        </Layout>

    )
}

export default FirstPage