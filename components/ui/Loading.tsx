import style from "@/styles/Loading.module.css";
import type * as CSS from "csstype";
const mainStyle: CSS.Properties = {
  borderWidth: "thin",
  borderStyle: "dotted",
  borderColor: "rebeccapurple",
};
export default function Loading() {
  return (
    <div className={style["main"]}>
      <div className={style["sk-chase"]}>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
        <div className={style["sk-chase-dot"]}></div>
      </div>
    </div>
  );
}
