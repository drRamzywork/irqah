import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";

const ContactUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="اتصل بنا" navigation="اتصل بنا" />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;