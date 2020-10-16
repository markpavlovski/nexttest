import React from "react";
import styles from "./PageTitle.module.scss";
import {PageTitleProps} from "./types";

const PageTitle: React.FC<PageTitleProps> = ({title}) => (
  <h1>{title}</h1>
);

export default PageTitle;