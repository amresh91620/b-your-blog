import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state?.auth?.user);
  
  if (!user) {
    // Agar user login nahi hai to login page par bhej do
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;