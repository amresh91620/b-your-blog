import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer/>
      <Toaster position="top-right" /> 
    </>
  );
};

export default App;
