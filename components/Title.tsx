import styles from "@/styles/Title.module.css";
import clsx from "clsx";
import { useState } from "react";
export default function Title() {
  const [hovered, setHover] = useState(false);


  return (
    <div
      className={styles.title}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1
        className={clsx({
          bottomBorderMd: hovered,
          paddingBottomMd: true,
          animationXs: true,
        })}
      >
        crackq.me
      </h1>
    </div>
  );
}
