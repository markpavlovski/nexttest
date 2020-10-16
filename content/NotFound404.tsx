import React from "react";
import layoutStyles from "../components/layout/Layout.module.scss";
import pageStyles from "../pages/pages.module.scss";
import cn from "classnames"

const NotFound404: React.FC = () => (
  <section className={cn(layoutStyles.block, layoutStyles.width12, pageStyles.firstSection)}>
    No Content
  </section>
);

export default NotFound404;