import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="معرض المحفظة" navigation="معرض المحفظة" />
      <PortfolioMain />
    </Layout>
  );
};

export default OurPortfolio;
