import { heroContent } from "../../data/exchangeData";
import BalanceOverview from "./BalanceOverview";
import styles from "../..//components/exchange/ExchangeHero.module.css";
function ExchangeHero({ balance }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heroContent.title}</h1>
        <p className={styles.subtitle}>{heroContent.subtitle}</p>
        <p className={styles.description}>{heroContent.description}</p>
        <BalanceOverview balance={balance} />
      </div>
      <div className={styles.visual}>
        <img src={heroContent.image} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

export default ExchangeHero;
