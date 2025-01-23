
import Introduction from "@/components/Introduction/Introduction";
import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home Two">
      <MainSliderTwo />
      <Introduction />
      {/* <FourIcon />
      <WeInspire />
      <BrandOne /> */}

    </Layout>
  );
};

export default Home;
