import React from "react";
import { nanoid } from "nanoid";

import styles from "./index.module.css";

export default function Demo(props) {
  return (
    <div className={styles.demo} style={{ ...props.style }}>
      <div className={styles.demo_desc}>Demo : Monday, March 11, 2024</div>
      <button key={nanoid()} className={styles.demo_img}></button>
    </div>
  );
}