import React from "react";
import styles from "./TextBanner.module.scss";;

import {TextBannerProps} from "./types";

const TextBanner: React.FC<TextBannerProps> = ({text}) => (
  <div className={styles.container}>
    {text}
  </div>
);

export default TextBanner;