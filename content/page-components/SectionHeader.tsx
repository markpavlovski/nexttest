import React from "react";
import styles from "./SectionHeader.module.scss";
import {SectionHeaderProps} from "./types";
import cn from "classnames"

const SectionHeader: React.FC<SectionHeaderProps> = ({text, anchor}) => (
  <div className={styles.container} id={anchor}>
      <div className={cn(styles.acorn, styles.acornLeft)}/>
      {text}
      <div className={cn(styles.acorn, styles.acornRight)}/>
  </div>
);

export default SectionHeader;