import { veCoinImage } from "../../data/exchangeData";
import styles from "./ExchangeCard.module.css";
import { ArrowRight, MoveDown } from "lucide-react";
import { motion } from "framer-motion";

function ExchangeCard({ option, onConvert, index, balance }) {
  const canAfford = balance.gems >= option.requiredGems;
  const missingGems = option.requiredGems - balance.gems;
  return (
    <motion.article
      className={`${styles.card} ${styles[option.theme]}`}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.5 + index * 0.1,
      }}
      whileHover={{ y: -4 }}
    >
      {option.badge && <span className={styles.badge}>{option.badge}</span>}
      <div className={styles.visuals}>
        <img src={option.image} alt={`${option.theme} gem`} />
        <ArrowRight size={20} aria-hidden="true" />
        <img src={veCoinImage} alt="VE coin" />
      </div>
      <h3 className={styles.title}>{option.title}</h3>
      <div className={styles.conversion}>
        <span className={styles.gem}>{option.requiredGems} Gems</span>
        <MoveDown size={20} aria-hidden="true" />
        <span className={styles.vecoin}>{option.receiveVEs} VEs</span>
      </div>
      <p className={styles.text}>{option.description}</p>
      {!canAfford && (
        <p className={styles.shortfall}>You need {missingGems} more Gems</p>
      )}
      <button
        className={`${styles.button} ${canAfford ? "" : styles.earnButton}`}
        onClick={() => onConvert(option)}
        aria-label={
          canAfford
            ? `Convert Rewards for ${option.title}`
            : `Earn more Gems to unlock ${option.title}`
        }
        type="button"
      >
        {canAfford ? "Convert Rewards" : "Earn More Gems"}
      </button>
    </motion.article>
  );
}

export default ExchangeCard;
