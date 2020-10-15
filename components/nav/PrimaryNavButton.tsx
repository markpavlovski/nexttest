import React from "react";
import styles from './Nav.module.scss'
import {PrimaryNavButtonProps} from "./types";
import Link from "next/link";
import cn from "classnames";

const PrimaryNavButton: React.FC<PrimaryNavButtonProps> = ({navItem, selected}) => {
  return (
    <div className={styles.primaryNavButtonContainer}>
      <Link href={`/${navItem?.slug}`}>
        <a>
          <button className={styles.primaryNavButton} data-node-id={navItem?.name}>
            {navItem?.name}
          </button>
        </a>
      </Link>
      <div className={cn(styles.carat, {[styles.caratSelected]: selected})}/>
    </div>
  )
};

export default PrimaryNavButton;