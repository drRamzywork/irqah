import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner
        title="توقيع عقد هندسة الإجراءات مع (شركة تام)"
        navigation="توقيع عقد هندسة الإجراءات مع (شركة تام)
 "
        parent="الأخبار "
        parentLink="/news"
      />
      <TeamDetailsMain />
      {/* <CtaTwo /> */}
    </Layout>
  );
};

export default TeamDetails;
