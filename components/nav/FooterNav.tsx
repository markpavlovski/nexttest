import React from "react";
import styles from './Nav.module.scss'
import FooterNavBar from "./FooterNavBar";

const FooterNav: React.FC = () => {
  return (
    <div className={styles.navContainer}>
      <FooterNavBar/>
    </div>
  )
};

export default FooterNav;