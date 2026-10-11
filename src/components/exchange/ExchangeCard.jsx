import { veCoinImage } from "../../data/exchangeData";
import styles from "./ExchangeCard.module.css";
import { ArrowRight, MoveDown } from "lucide-react";

function ExchangeCard({ option, onConvert }) {
  return (
    <article className={`${styles.card} ${styles[option.theme]}`}>
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
      <button
        className={styles.button}
        onClick={() => onConvert(option)}
        aria-label={`Convert Rewards for ${option.title}`}
        type="button"
      >
        Convert Rewards
      </button>
    </article>
  );
}

export default ExchangeCard;
