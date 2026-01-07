import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogPage from "../pages/BlogPage";
import BlogPostDetail from "../pages/BlogPostDetail";
import ProtectedRoute from "./ProtectedRoute";
import WritePage from "../pages/WritePage";
import ForgotPassword from "../pages/ForgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forget-password" element={<ForgotPassword/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:id" element={<BlogPostDetail/>} />
      <Route 
  path="/write" 
  element={
    <ProtectedRoute>
      <WritePage />
    </ProtectedRoute>
  } 
/>
    </Routes>
  );
};

export default AppRoutes;
