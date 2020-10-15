import React from "react";
import styles from './Nav.module.scss'
import {bottomNavItems} from "../../common/constants";
import FooterNavButton from "./FooterNavButton";

const FooterNavBar: React.FC = () => (
  <div className={styles.footerNavContainer}>
    {bottomNavItems.map(
      navItem => <FooterNavButton
        navItem={navItem}
        key={navItem.name}
      />
    )}
  </div>
);

export default FooterNavBar;