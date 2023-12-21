import { useEffect } from "react";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = ({ setProgress }) => {
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

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

Details.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default Details;
