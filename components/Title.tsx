import ThemedStyle from "@/styles/TitleThemed.module.scss";
import { AnimeAnimParams } from "animejs";
import { HTMLProps } from "react";
import ReactAnime from "./Anime";

interface TitleProps {
  text: string;
}

export default function Title(props: TitleProps & HTMLProps<"div">) {
  const { text } = props;
  /* TODO: Use Splitting: https://splitting.js.org and Anime.js for Effect */
  const content = text;
  const animation: AnimeAnimParams = {
    targets: `#title`,
    translateY: ["0.75em", 0],
    translateZ: 0,
    duration: 750,
    // delay: (el, i) => 10 * i,
  };
  return (
    <ReactAnime.Anime
      animeConfig={{
        easing: "easeInSine",
      }}
      className={`${ThemedStyle.titleWrapper}`}
      _onClick={[animation]}
      initial={[animation]}
    >
      <div id="title" className={`${ThemedStyle.title}`}>
        {content}
      </div>
    </ReactAnime.Anime>
  );
}
