import styles from "./UserCard.module.css";

function UserCard({ name, status }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.body}>
        <p className={styles.status}>
          Status: <span>{status}</span>
        </p>
        <button className={status === 'Active' ? styles.activeButton : styles.inactiveButton}>
          {status === 'Active' ? 'Active' : 'Inactive'}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
