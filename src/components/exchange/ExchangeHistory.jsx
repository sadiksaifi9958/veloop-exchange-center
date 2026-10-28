import { ArrowRight, History, ChevronRight } from "lucide-react";
import { veCoinImage } from "../../data/exchangeData";
import styles from "./ExchangeHistory.module.css";
import { motion } from "framer-motion";
function ExchangeHistory({ items, labels, statusConfig }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{labels.title}</h2>
        <button type="button" className={styles.viewAll}>
          {labels.viewAll}
        </button>
      </div>
      <ul className={styles.list}>
        {items.map((item) => {
          const StatusIcon = statusConfig[item.status].icon;
          return (
            <motion.li
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
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
                <StatusIcon aria-hidden="true" />
              </span>
            </motion.li>
          );
        })}
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
