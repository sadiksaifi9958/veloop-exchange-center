import styles from "./HowExchangeWorks.module.css";
import InfoTooltip from "./InfoTooltip";
import { infoTooltip } from "../../data/exchangeData";
function HowExchangeWorks({ steps }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        How Exchange Works{" "}
        <InfoTooltip
          title={infoTooltip.howItWorks.title}
          text={infoTooltip.howItWorks.text}
          label="About How Exchange Works"
        />
      </h2>
      <ol className={styles.steps}>
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.step}
              className={`${styles.step} ${styles[item.theme]}`}
            >
              <span className={styles.circle}>
                {item.icon ? (
                  <Icon aria-hidden="true" />
                ) : (
                  <img src={item.image} alt="" />
                )}
              </span>
              <span className={styles.number}>
                {String(item.step).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default HowExchangeWorks;
