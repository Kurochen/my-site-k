import * as React from "react"
// import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"

interface LayoutProps {
    children: React.ReactNode
    title: string
    description?: string
    image?: { id: string; url: string }
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head {...props} />
            {/* <Header /> */}
            {props.children}
            <Footer />
        </>
    )
}

export default Layout