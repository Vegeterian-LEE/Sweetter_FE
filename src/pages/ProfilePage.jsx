import React from "react";

import Layout from "../components/Layout/Layout";
import ProfileLayout from "../components/Profile/ProfileLayout";
import SearchBar from "../components/Layout/SearchBar";
import SideBar from "../components/Layout/SideBar";

const ProfilePage = () => {
  return (
    <Layout>
      <SideBar />
      <ProfileLayout />
      <SearchBar />
    </Layout>
  );
};

export default ProfilePage;
