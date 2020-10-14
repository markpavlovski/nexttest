import React from "react";
import {LayoutProps} from "./types";
import styles from './Layout.module.scss'
import cn from "classnames";
import Nav from "../nav/Nav";

const Layout: React.FC<LayoutProps> = (props) => {
  const {children, debug} = props;
  return (
    <div className={styles.wallToWallContainer}>
      <header className={cn(styles.outerContainerHeader, styles.stickyHeader)}>
        <div className={styles.innerContainerHeader}>
          <Nav/>
        </div>
      </header>
      <div className={cn(styles.outerContainerBody, {
        [styles.debug]: debug,
      })}>
        <div className={cn(styles.innerContainerBody, {
          [styles.debug]: debug,
        })}>
          {children}
        </div>
      </div>
    </div>
  )
};

export default Layout;