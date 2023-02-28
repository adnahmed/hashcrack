import styles from "@/styles/Navbar.module.css";
export default function Navbar() {
  return (
    <li className={styles.navbar}>
      <ul>Tasks queue</ul>
      <ul>Add new task</ul>
      <ul>Get Result</ul>
      <ul>Verify Service</ul>
      <ul>Contact Us</ul>
    </li>
  );
}
