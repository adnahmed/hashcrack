import style from "@/styles/Loading.module.css";
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
