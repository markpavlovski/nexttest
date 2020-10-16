import React from "react";
import styles from "./ParagraphTitle.module.scss";

const ParagraphTitle: React.FC = ({children}) => (
  <h4 className={styles.container}>
    {children}
  </h4>
);

export default ParagraphTitle;