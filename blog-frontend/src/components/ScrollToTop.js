import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye page ko sabse upar (top: 0) le jayega jab bhi path change hoga
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi kar sakte hain, par instant behtar hai navigation ke liye
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;