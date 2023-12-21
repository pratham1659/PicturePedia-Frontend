import { useEffect } from "react";
import PropTypes from "prop-types";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = ({ setProgress }) => {
  useEffect(() => {
    setProgress(30);
    const loadingTimeout = setTimeout(() => {
      setProgress(100);
    }, 1000);
    return () => clearTimeout(loadingTimeout);
  }, [setProgress]);
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

PageNotFound.propTypes = {
  setProgress: PropTypes.func.isRequired,
};
export default PageNotFound;
