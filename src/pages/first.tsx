import * as React from "react"
import FeatureList from "../components/feature-list"
import Hero from "../components/hero"
import Layout from "../components/layout"
import LogoList from "../components/logo-list"

function FirstPage() {
    return (
        <Layout title="First page">
            <Hero />
            <LogoList />
            <FeatureList />
        </Layout>

    )
}

export default FirstPage