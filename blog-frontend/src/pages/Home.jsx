import HeroSection from "../components/home/HeroSection";
import Marquee from "../components/home/Marquee";
import LatestStories from "../components/home/LatestStories";
import CategoriesSection from "../components/home/CategoriesSection";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Marquee />
      <LatestStories />
      <CategoriesSection />
      <Newsletter />
    </>
  );
};

export default Home;
