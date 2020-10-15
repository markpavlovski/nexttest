import React from "react";
import {LayoutProps} from "./types";
import styles from './Layout.module.scss'
import cn from "classnames";
import Nav from "../nav/Nav";
import Head from "next/head";
import {isDoubleLineTopNav} from "../../common/utils";
import FooterNav from "../nav/FooterNav";

const Layout: React.FC<LayoutProps> = props => {
  const {children, debug, activePage} = props;
  const showFullSecondaryBar = isDoubleLineTopNav(activePage);

  return (
    <div className={styles.wallToWallContainer}>
      <Head>
        <title>{activePage}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={cn(styles.outerContainerHeader, styles.stickyHeader)}>
        <div className={cn(styles.innerContainerHeader, {
          [styles.doubleLineTopNav]: showFullSecondaryBar,
        })}>
          <Nav activePage={activePage}/>
        </div>
      </header>
      <div className={cn(styles.outerContainerBody, {
        [styles.debug]: debug,
        [styles.doubleLineTopNav]: showFullSecondaryBar,
      })}>
        <div className={cn(styles.innerContainerBody, {
          [styles.debug]: debug,
          [styles.doubleLineTopNav]: showFullSecondaryBar,
        })}>
          {children}
        </div>
      </div>
      <footer className={styles.outerContainerFooter}>
        <div className={styles.innerContainerFooter}>
          <FooterNav/>
        </div>
      </footer>
    </div>
  )
};

export default Layout;