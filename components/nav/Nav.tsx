import React from "react";
import styles from './Nav.module.scss'
import PrimaryNavBar from "./PrimaryNavBar";
import SecondaryNavBar from "./SecondaryNavBar";
import {NavBarProps} from "./types";

const Nav: React.FC<NavBarProps> = ({activePage}) => {
  return (
    <div className={styles.navContainer}>
      <PrimaryNavBar activePage={activePage}/>
      <SecondaryNavBar activePage={activePage}/>
    </div>
  )
};

export default Nav;