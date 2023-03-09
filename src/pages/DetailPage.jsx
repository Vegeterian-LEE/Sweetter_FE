import React from "react";

import Layout from "../components/layout/Layout";
import SearchBar from "../components/layout/SearchBar";
import SideBar from "../components/layout/SideBar";
import DetailLayout from "../components/Detail/DetailLayout";

const DetailPage = () => {
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <DetailLayout></DetailLayout>
        <SearchBar></SearchBar>
      </Layout>
    </>
  );
};

export default DetailPage;
