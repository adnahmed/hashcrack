import styles from "@/styles/Stats.module.css";
export default function Stats() {
  return (
    <div className={styles.stats}>
      <p>Tasks queued: user </p>
      <p>WPA processed:</p>
      <p>WPA cracked: %</p>
      <p>Hashes processed: _. </p>
      <p>Hashes cracked: %</p>
      <p>GPU cluster spped: user</p>
    </div>
  );
}
