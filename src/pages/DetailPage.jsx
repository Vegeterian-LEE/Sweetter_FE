import React from "react";

import Layout from "../components/Layout/Layout";
import SearchBar from "../components/Layout/SearchBar";
import SideBar from "../components/Layout/SideBar";
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
