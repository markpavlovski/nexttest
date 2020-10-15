import React from "react";
import layoutStyles from "../components/layout/Layout.module.scss";
import pageStyles from "../pages/pages.module.scss";
import cn from "classnames"

const Rentals: React.FC = () => (
  <section className={cn(layoutStyles.block, layoutStyles.width12, pageStyles.firstSection)}>
    Rentals
  </section>
);

export default Rentals;