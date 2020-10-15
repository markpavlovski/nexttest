import React from "react";
import styles from "./LogoBar.module.scss";

const LogoBar: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.logo}/>
  </div>
);

export default LogoBar;