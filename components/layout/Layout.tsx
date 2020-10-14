import React from "react";
import {LayoutProps} from "./types";
import styles from './Layout.module.scss'
import cn from "classnames";

const Layout: React.FC<LayoutProps> = (props) => {
  const {children, debug} = props;
  return (
    <div className={styles.wallToWallContainer}>
      <header className={styles.outerContainerHeader}>
        <div className={styles.innerContainerHeader}>
          Hello
        </div>
      </header>
      <div className={cn(styles.outerContainer, {
        [styles.debug]: debug,
      })}>
        <div className={cn(styles.innerContainer, {
          [styles.debug]: debug,
        })}>
          {children}
        </div>
      </div>
    </div>)
};

export default Layout;