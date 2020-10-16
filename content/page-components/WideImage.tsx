import React from "react";
import styles from "./WideImage.module.scss";
import {WideImageProps} from "./types";


const WideImage: React.FC<WideImageProps> = ({src, alt}) => (
  <div className={styles.wideImageContainer}>
    <img src={src} alt={alt} className={styles.wideImage}/>
  </div>
);

export default WideImage;