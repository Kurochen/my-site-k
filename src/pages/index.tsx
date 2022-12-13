import * as React from "react";
import FeatureList from "../components/feature-list";
import Hero from "../components/hero";
import Layout from "../components/layout";
import LogoList from "../components/logo-list";

function IndexPage() {
  return (
    <Layout title="Главная">
      <Hero />
      <FeatureList />
      <LogoList />
    </Layout>
  );
}

export default IndexPage;
