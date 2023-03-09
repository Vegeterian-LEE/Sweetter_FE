import React from "react";

import Layout from "../components/layout/Layout";
import SideBar from "../components/layout/SideBar";
import SearchBar from "../components/layout/SearchBar";
import BookmarkLayout from "../components/Bookmark/BookmarkLayout";

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
