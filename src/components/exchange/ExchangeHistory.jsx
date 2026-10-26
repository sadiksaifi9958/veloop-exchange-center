import { ArrowRight } from "lucide-react";
import { veCoinImage } from "../../data/exchangeData";
import styles from "./ExchangeHistory.module.css";
import { History, ChevronRight } from "lucide-react";
function ExchangeHistory({ items, labels }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{labels.title}</h2>
        <button type="button" className={styles.viewAll}>
          {labels.viewAll}
        </button>
      </div>
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
      <button type="button" className={styles.fullHistory}>
        <span>
          <History aria-hidden="true" /> {labels.viewFullHistory}
        </span>
        <ChevronRight aria-hidden="true" />
      </button>
    </section>
  );
}

export default ExchangeHistory;
