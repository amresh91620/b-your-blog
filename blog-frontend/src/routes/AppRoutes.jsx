import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogPage from "../pages/BlogPage";
import BlogPostDetail from "../pages/BlogPostDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:id" element={<BlogPostDetail/>} />
    </Routes>
  );
};

export default AppRoutes;
