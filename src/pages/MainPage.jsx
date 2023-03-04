import React from "react";

import Layout from "../components/Layout/Layout";
import SideBar from "../components/Layout/SideBar";
import PostLayout from "../components/Post/PostLayout";
import SearchBar from "../components/Layout/SearchBar";

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
