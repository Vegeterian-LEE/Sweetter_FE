import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import LoginPage from "../pages/Login/LoginPage";
import DetailPage from "../pages/Detail/DetailPage";
import BookmarkPage from "../pages/Bookmark/BookmarkPage";
import ProfilePage from "../pages/Profile/ProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
