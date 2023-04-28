import style from "@/styles/Loading.module.css";
import type * as CSS from "csstype";
const mainStyle: CSS.Properties = {
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
};
export default function Loading() {
  return (
    <div style={mainStyle}>
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
