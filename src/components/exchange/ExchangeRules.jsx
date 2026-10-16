import { Info, CircleCheck } from "lucide-react";
import styles from "./ExchangeRules.module.css";
function ExchangeRules({ rules }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Exchange Rules
        <button
          type="button"
          aria-label="About Exchange Rules"
          className={styles.info}
        >
          <Info aria-hidden="true" />
        </button>
      </h2>
      <ul className={styles.list}>
        {rules.map((item) => (
          <li key={item} className={styles.item}>
            <CircleCheck aria-hidden="true" className={styles.icon} />
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExchangeRules;
