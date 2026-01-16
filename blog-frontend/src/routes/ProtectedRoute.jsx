import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state?.auth?.user);
  const location = useLocation();
  
  if (!user) {
    // Agar user login nahi hai to home page par bhej do
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;