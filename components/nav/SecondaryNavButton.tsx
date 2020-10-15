import React from "react";
import styles from './Nav.module.scss'
import {SecondaryNavButtonProps} from "./types";
import Link from "next/link";

const SecondaryNavButton: React.FC<SecondaryNavButtonProps> = ({name, anchorLink}) => {
  return (
    <Link href={anchorLink}>
      <a>
        <button className={styles.secondaryNavButton}>
          {name}
        </button>
      </a>
    </Link>
  )
};

export default SecondaryNavButton;