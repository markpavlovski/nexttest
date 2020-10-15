import React from "react";
import styles from './Nav.module.scss'
import {FooterNavButtonProps} from "./types";
import Link from "next/link";

const FooterNavButton: React.FC<FooterNavButtonProps> = ({navItem}) => {
  return (
      <Link href={`/${navItem?.slug}`}>
        <a>
          <button className={styles.primaryNavButton} data-node-id={navItem?.name}>
            {navItem?.name}
          </button>
        </a>
      </Link>
  )
};

export default FooterNavButton;