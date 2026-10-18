import { Inbox, TriangleAlert } from "lucide-react";
import styles from "./ExchangeStatus.module.css";
function ExchangeStatus({ variant, title, message, actionLabel, onAction }) {
  const Icon = variant === "error" ? TriangleAlert : Inbox;
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`${styles.status} ${styles[variant]}`}
    >
      <div className={styles.iconWrap}>
        <Icon aria-hidden="true" size={40} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      {actionLabel && (
        <button type="button" className={styles.button} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default ExchangeStatus;
