import styles from "@/styles/Layout.module.css";
import Navbar from "./Navbar";
import Title from "./Title";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Title />
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
