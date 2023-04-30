import styles from "@/styles/Stats.module.css";
import CountUp from "react-countup";
export default function Stats() {
  return (
    <div className={styles.stats}>
      <p>
        Tasks queued: <CountUp end={0} />{" "}
      </p>
      <p>
        WPA processed: <CountUp end={213712} />{" "}
      </p>
      <p>WPA cracked: </p>
      <p>Hashes processed: _. </p>
      <p>Hashes cracked: %</p>
      <p>GPU cluster spped: user</p>
    </div>
  );
}
