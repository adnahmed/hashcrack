import styles from '@/styles/Stats.module.css';
import GPUStatus from './GPUStatus';
export default function Stats() {
    const queuedTasks = 0;
    const wpaProcessed = 213712;
    return (
        <div className={`${styles.stats} `}>
            <p>Tasks queued: {queuedTasks}</p>
            <p>WPA processed: {wpaProcessed}</p>
            <p>WPA cracked: </p>
            <p>Hashes processed: _. </p>
            <p>Hashes cracked: %</p>
            <p>GPU cluster spped: user</p>
            <GPUStatus />
        </div>
    );
}
