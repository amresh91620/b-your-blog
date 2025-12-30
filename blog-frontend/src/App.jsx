import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
