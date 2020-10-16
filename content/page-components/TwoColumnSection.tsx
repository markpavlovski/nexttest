import React from "react";
import styles from "./TwoColumnSection.module.scss";
import layoutStyles from "../../components/layout/Layout.module.scss";
import cn from "classnames";


const TwoColumnSection: React.FC = ({children}) => {
  // @ts-ignore
  const [fistChild, secondChild] = children;
  return (
    <div className={styles.container}>
      <div className={cn(styles.column, styles.left, layoutStyles.block)}>
        {fistChild}
      </div>
      <div className={cn(styles.column, styles.right, layoutStyles.block)}>
        {secondChild}
      </div>
    </div>)
};

export default TwoColumnSection;