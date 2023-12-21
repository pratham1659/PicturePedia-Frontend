import { useEffect } from "react";
import PropTypes from "prop-types";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = ({ setProgress }) => {
  useEffect(() => {
    // Set progress to 30 initially
    setProgress(30);
    // Simulate a delay to show the loading bar
    const loadingTimeout = setTimeout(() => {
      setProgress(100); // Finish loading after the timeout
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, [setProgress]);

  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

Home.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default Home;
