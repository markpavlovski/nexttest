import React from "react";
import styles from "./Button.module.scss";;

import {ButtonProps} from "./types";

const Button: React.FC<ButtonProps> = ({text, href}) => (
  <a className={styles.container} href={href} target="_blank">
    {text}
  </a>
);

export default Button;