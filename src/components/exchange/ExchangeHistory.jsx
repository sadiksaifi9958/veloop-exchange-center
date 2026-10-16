import { ArrowRight } from "lucide-react";
import { veCoinImage } from "../../data/exchangeData";
import styles from "./ExchangeHistory.module.css";
function ExchangeHistory({ items }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Recent Conversions</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.icons}>
              <img src={item.image} alt="" className={styles.gem} />
              <ArrowRight aria-hidden="true" />
              <img src={veCoinImage} alt="" className={styles.veCoin} />
            </div>
            <div className={styles.numbers}>
              <span>{item.gems} Gems</span>
              <ArrowRight aria-hidden="true" />
              <span>{item.ves} VEs</span>
            </div>
            <time className={styles.date}>{item.date}</time>
            <span className={`${styles.status} ${styles[item.status]}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExchangeHistory;
