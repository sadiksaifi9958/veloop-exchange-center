import gemImage from "../../assets/gems/purple-gem.webp";
import styles from "./BalanceOverview.module.css";
import InfoTooltip from "./InfoTooltip";
import { infoTooltip, veCoinImage } from "../../data/exchangeData";
import AnimatedNumber from "./AnimatedNumber";

function BalanceOverview({ balance }) {
  const balanceItems = [
    {
      id: "Gems",
      value: balance.gems,
      title: "Available Gems",
      subtitle: "Your Reward Gems",
      image: gemImage,
      theme: "purple",
      infoKey: "gems",
    },
    {
      id: "VEs",
      value: balance.ves,
      title: "Available VEs",
      subtitle: "Your VE Balance",
      image: veCoinImage,
      theme: "gold",
      infoKey: "ves",
    },
  ];
  return (
    <section aria-label="Your Balance" className={styles.wrapper}>
      {balanceItems.map((item) => (
        <div key={item.id} className={`${styles.box} ${styles[item.theme]}`}>
          <img src={item.image} className={styles.image} alt="" />
          <div className={styles.info}>
            <div className={styles.labelRow}>
              <p>{item.title}</p>
              <InfoTooltip
                title={infoTooltip[item.infoKey].title}
                text={infoTooltip[item.infoKey].text}
                label={`About ${item.id}`}
              />
            </div>
            <span className={styles.value}>
              <AnimatedNumber value={item.value} />
            </span>
            <p className={styles.subtitle}>{item.subtitle}</p>
          </div>
          <div className={styles.imageWrap}>
            <img
              src={item.image}
              aria-hidden="true"
              alt=""
              className={styles.watermark}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default BalanceOverview;
