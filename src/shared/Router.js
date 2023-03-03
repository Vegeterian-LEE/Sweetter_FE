import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import DetailPage from "../pages/DetailPage";
import BookmarkPage from "../pages/BookmarkPage";
import ProfilePage from "../pages/ProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
