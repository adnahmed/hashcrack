import anime, { AnimeAnimParams, AnimeInstance, AnimeParams } from "animejs";
import React, {
  AllHTMLAttributes,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
interface AnimModes {
  _onClick?: AnimeAnimParams;
  _onContextMenu?: AnimeAnimParams;
  _onDoubleClick?: AnimeAnimParams;
  _onDrag?: AnimeAnimParams;
  _onDragEnd?: AnimeAnimParams;
  _onDragEnter?: AnimeAnimParams;
  _onDragExit?: AnimeAnimParams;
  _onDragLeave?: AnimeAnimParams;
  _onDragOver?: AnimeAnimParams;
  _onDragStart?: AnimeAnimParams;
  _onDrop?: AnimeAnimParams;
  _onMouseDown?: AnimeAnimParams;
  _onMouseEnter?: AnimeAnimParams;
  _onMouseLeave?: AnimeAnimParams;
  _onMouseMove?: AnimeAnimParams;
  _onMouseOut?: AnimeAnimParams;
  _onMouseOver?: AnimeAnimParams;
  _onMouseUp?: AnimeAnimParams;
}
type Control = "play" | "pause" | "restart" | "reverse";
type ControlWithTime = { 0: Control | "seek" | "tick"; 1: number };
const Anime = (
  props: AnimeAnimParams & {
    control?: Control | ControlWithTime;
    animeConfig?: AnimeParams;
    initial: AnimeAnimParams[];
  } & AllHTMLAttributes<"div"> &
    AnimModes
) => {
  const {
    id,
    className,
    style,
    type,
    children,
    explodeOptions,
    control,
    setMeta,
  } = props;
  const [state, setState] = useState("");
  const [lastControl, setLastControl] = useState<Control | ControlWithTime>();
  const [player, setPlayer] = useState<AnimeInstance | undefined>();
  let words: string[] = [];
  let chars: string[] = [];
  const explodedChildren: React.ReactNode[] = [];
  if (props.explode) {
    React.Children.map(children, (child) => {
      if (typeof child === "string") {
        words = child.split(" ");
        chars = child.split("");
      }
    });

    const options = {
      className: explodeOptions?.name,
      style: { display: "inline-block" },
    };
    if (props.explode === "characters") {
      chars.map((char) => {
        explodedChildren.push(
          React.createElement("span", options, char === " " ? "\u00A0" : char)
        );
      });
    } else if (props.explode === "words") {
      words.map((word) => {
        explodedChildren.push(React.createElement("span", options, word));
        explodedChildren.push(React.createElement("span", options, "\u00A0"));
      });
    }
  }

  const Play = useCallback(
    (event: string) => {
      const mode: undefined | null | AnimeAnimParams[] = props[event];
      const { animeConfig } = props;
      if (mode === undefined || mode === null) return undefined;
      if (mode.length > 1) {
        const config = animeConfig
          ? animeConfig
          : { easing: "easeOutExpo", duration: 750 };
        if (setMeta) {
          config.update = () =>
            setMeta({
              progress: tl.progress,
              currentTime: tl.currentTime,
              duration: tl.duration,
            });
        }
        const tl = anime.timeline(config);

        mode.map((anim: AnimeAnimParams) => tl.add(anim));
        return tl;
      } else {
        mode.map((anim: AnimeAnimParams) => anime(anim));
      }
      return undefined;
    },
    [props, setMeta]
  );

  useLayoutEffect(() => {
    setPlayer(Play("initial"));
  }, [Play]);

  useLayoutEffect(() => {
    if (props[state] === undefined) {
      if (props["_onUpdate"]) {
        Play("_onUpdate");
      }
      if (control && player) {
        if (lastControl !== control) {
          if (typeof control !== "object") {
            setLastControl(control);
            player[control]();
          } else {
            setLastControl(control);
            player[control[0]](player.duration * (control[1] / 100));
          }
        }
      }
    } else {
      Play(state);
    }
    setState("");
    return () => {
      if (props["_onUnmount"]) {
        Play("_onUnmount");
      }
    };
  }, [props, state, control, player, Play, lastControl]);

  const options: AllHTMLAttributes<"div"> = {
    id,
    style,
    className,
    onClick: (e) => {
      if (props["_onClick"]) setState("_onClick");
      props.onClick && props.onClick(e);
    },
    onContextMenu: (e) => {
      if (props["_onContextMenu"]) setState("_onContextMenu");
      props.onContextMenu && props.onContextMenu(e);
    },
    onDoubleClick: (e) => {
      if (props["_onDoubleClick"]) setState("_onDoubleClick");
      props.onDoubleClick && props.onDoubleClick(e);
    },
    onDrag: (e) => {
      if (props["_onDrag"]) setState("_onDrag");
      props.onDrag && props.onDrag(e);
    },
    onDragEnd: (e) => {
      if (props["_onDragEnd"]) setState("_onDragEnd");
      props.onDragEnd && props.onDragEnd(e);
    },
    onDragEnter: (e) => {
      if (props["_onDragEnter"]) setState("_onDragEnter");
      props.onDragEnter && props.onDragEnter(e);
    },
    onDragExit: (e) => {
      if (props["_onDragExit"]) setState("_onDragExit");
      props.onDragExit && props.onDragExit(e);
    },
    onDragLeave: (e) => {
      if (props["_onDragLeave"]) setState("_onDragLeave");
      props.onDragLeave && props.onDragLeave(e);
    },
    onDragOver: (e) => {
      if (props["_onDragOver"]) setState("_onDragOver");
      props.onDragOver && props.onDragOver(e);
    },
    onDragStart: (e) => {
      if (props["_onDragStart"]) setState("_onDragStart");
      props.onDragStart && props.onDragStart(e);
    },
    onDrop: (e) => {
      if (props["_onDrop"]) setState("_onDrop");
      props.onDrop && props.onDrop(e);
    },
    onMouseDown: (e) => {
      if (props["_onMouseDown"]) setState("_onMouseDown");
      props.onMouseDown && props.onMouseDown(e);
    },
    onMouseEnter: (e) => {
      if (props["_onMouseEnter"]) setState("_onMouseEnter");
      props.onMouseEnter && props.onMouseEnter(e);
    },
    onMouseLeave: (e) => {
      if (props["_onMouseLeave"]) setState("_onMouseLeave");
      props.onMouseLeave && props.onMouseLeave(e);
    },
    onMouseMove: (e) => {
      if (props["_onMouseMove"]) setState("_onMouseMove");
      props.onMouseMove && props.onMouseMove(e);
    },
    onMouseOut: (e) => {
      if (props["_onMouseOut"]) setState("_onMouseOut");
      props.onMouseOut && props.onMouseOut(e);
    },
    onMouseOver: (e) => {
      if (props["_onMouseOver"]) setState("_onMouseOver");
      props.onMouseOver && props.onMouseOver(e);
    },
    onMouseUp: (e) => {
      if (props["_onMouseUp"]) setState("_onMouseUp");
      props.onMouseUp && props.onMouseUp(e);
    },
  };

  return React.createElement(
    type || "div",
    options,
    props.explode === undefined ? children : explodedChildren
  );
};
const ReactAnime = {
  Anime: Anime,
  stagger: anime.stagger,
};

export default ReactAnime;
