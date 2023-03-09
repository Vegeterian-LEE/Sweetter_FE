import React from "react";

import Layout from "../components/layout/Layout";
import SideBar from "../components/layout/SideBar";
import PostLayout from "../components/Post/PostLayout";
import SearchBar from "../components/layout/SearchBar";

const MainPage = () => {
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <PostLayout></PostLayout>
        <SearchBar></SearchBar>
      </Layout>
    </>
  );
};

export default MainPage;
