import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <>
      <ScrollToTop/>
      {!isDashboard && <Navbar />}
      <AppRoutes />
      {!isDashboard && <Footer/>}
      <Toaster position="top-right" /> 
    </>
  );
};

export default App;
