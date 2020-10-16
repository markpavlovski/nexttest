import React from "react";
import styles from "./Footer.module.scss";
import {FooterProps} from "./types";

const Footer: React.FC<FooterProps> = ({footerHTML}) => (
  <div className={styles.container}>
    <div className={styles.footerContent} dangerouslySetInnerHTML={{__html: footerHTML}}/>
    <div className={styles.footerBar}/>
  </div>
);

export default Footer;