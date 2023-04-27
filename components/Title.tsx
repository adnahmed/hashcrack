import styles from "@/styles/Title.module.css";
import { AnimeAnimParams } from "animejs";
import { HTMLProps } from "react";
import ReactAnime from "./Anime";

interface TitleProps {
  text: string;
}

export default function Title(props: TitleProps & HTMLProps<"div">) {
  const { text } = props;
  /* TODO: Use Splitting: https://splitting.js.org */
  const content = text.split("");
  let letter = 0;
  const animation: AnimeAnimParams = {
    targets: `#letter`,
    translateY: ["0.4em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 10 * i,
  };
  return (
    <ReactAnime.Anime
      animeConfig={{
        easing: "easeInSine",
      }}
      _onClick={[animation]}
      initial={[animation]}
    >
      <div id="ml6" className={styles.ml6}>
        <div className={styles.textWrapper}>
          {content.map((c) => (
            <span id="letter" className={styles.letter} key={letter++}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </ReactAnime.Anime>
  );
}
