import React from "react";

import Layout from "../components/Layout/Layout";
import SideBar from "../components/Layout/SideBar";
import SearchBar from "../components/Layout/SearchBar";
import BookmarkLayout from "../components/Layout/BookmarkLayout";

const BookmarkPage = () => {
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <BookmarkLayout></BookmarkLayout>
        <SearchBar></SearchBar>
      </Layout>
    </>
  );
};

export default BookmarkPage;
