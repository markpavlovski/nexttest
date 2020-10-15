import React from "react";
import styles from './Nav.module.scss'
import PrimaryNavButton from "./PrimaryNavButton";
import {NavBarProps} from "./types";
import {topNavItems} from "../../common/constants";

const PrimaryNavBar: React.FC<NavBarProps> = ({activePage}) => (
  <div className={styles.primaryNavContainer}>
    {topNavItems.map(
      navItem => <PrimaryNavButton
        navItem={navItem}
        selected={activePage === navItem.name}
        key={navItem.name}
      />
    )}
  </div>
);

export default PrimaryNavBar;