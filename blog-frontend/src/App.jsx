import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const authPages = ['/dashboard', '/login', '/register', '/forget-password'];
  const hideNavbarFooter = authPages.includes(location.pathname);

  return (
    <>
      <ScrollToTop/>
      {!hideNavbarFooter && <Navbar />}
      <AppRoutes />
      {!hideNavbarFooter && <Footer/>}
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            border: '1px solid #374151',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            padding: '12px 16px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#f9fafb',
            },
            style: {
              background: '#065f46',
              color: '#ecfdf5',
              border: '1px solid #10b981',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f9fafb',
            },
            style: {
              background: '#7f1d1d',
              color: '#fef2f2',
              border: '1px solid #ef4444',
            },
          },
        }}
      /> 
    </>
  );
};

export default App;
