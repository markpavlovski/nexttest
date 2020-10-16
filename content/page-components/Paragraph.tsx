import React from "react";
import styles from "./Paragraph.module.scss";

const Paragraph: React.FC = ({children}) => (
  <p className={styles.container}>
    {children}
  </p>
);

export default Paragraph;