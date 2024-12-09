import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="سناء ص. ليش"
        navigation="تفاصيل الفريق"
        parent="تفاصيل الفريق"
        parentLink="our-teams"
      />
      <TeamDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
