import React from "react";
import layoutStyles from "../../components/layout/Layout.module.scss";


const SingleColumnSection: React.FC = ({children}) => (
  <div className={layoutStyles.width10}>
    {children}
  </div>
);

export default SingleColumnSection;