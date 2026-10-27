import { CircleCheck } from "lucide-react";
import InfoTooltip from "./InfoTooltip";
import { infoTooltip } from "../../data/exchangeData";
import styles from "./ExchangeRules.module.css";

function ExchangeRules({ rules, image }) {
  return (
    <section className={styles.section} id="exchange-rules">
      <h2 className={styles.title}>
        Exchange Rules
        <InfoTooltip
          title={infoTooltip.exchangeRules.title}
          text={infoTooltip.exchangeRules.text}
          label="About Exchange Rules"
        />
      </h2>
      <ul className={styles.list}>
        {rules.map((item) => (
          <li key={item} className={styles.item}>
            <CircleCheck aria-hidden="true" className={styles.icon} />
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
      <img src={image} alt="" aria-hidden="true" className={styles.image} />
    </section>
  );
}

export default ExchangeRules;
