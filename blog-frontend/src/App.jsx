import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <AppRoutes />
      <Footer/>
      <Toaster position="top-right" /> 
    </>
  );
};

export default App;
