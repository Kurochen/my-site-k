import * as React from "react";
// import Header from "./header"
import Footer from "./footer";
import Head from "./head";
import "../styles.css";
import { Flex } from "./ui";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  image?: { id: string; url: string };
}

const Layout = (props: LayoutProps) => {
  return (
    <Flex variant="column">
      <Head {...props} />
      {/* <Header /> */}
      <React.Fragment>{props.children}</React.Fragment>
      <Footer />
    </Flex>
  );
};

export default Layout;
