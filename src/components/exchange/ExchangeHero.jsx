import { heroContent } from "../../data/exchangeData";
import BalanceOverview from "./BalanceOverview";
import styles from "./ExchangeHero.module.css";
import { motion } from "framer-motion";
function ExchangeHero({ balance }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heroContent.title}</h1>
        <p className={styles.subtitle}>{heroContent.subtitle}</p>
        <p className={styles.description}>{heroContent.description}</p>
        <BalanceOverview balance={balance} />
      </div>
      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.4 }}
      >
        <img src={heroContent.image} alt="" aria-hidden="true" />
      </motion.div>
    </section>
  );
}

export default ExchangeHero;
