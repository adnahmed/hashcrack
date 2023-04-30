import Logo from "@/public/favicon.svg";
import style from "@/styles/MainPage.module.css";
import Navbar from "./Navbar";
import Title from "./Title";
const MainPage = () => {
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <img src={Logo} alt="Logo" className={style.logo} />
        <Title text="Crackq.Me" />
      </div>
      <Navbar />
    </div>
  );
};

export default MainPage;
