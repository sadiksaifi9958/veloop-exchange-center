import { veCoinImage } from "../../data/exchangeData";
import gemImage from "../../assets/gems/purple-gem.webp";
import styles from "./BalanceOverview.module.css";
import { Info } from "lucide-react";

function BalanceOverview({ balance }) {
  const balanceItems = [
    {
      id: "gem",
      value: balance.gems,
      title: "Available Gems",
      subtitle: "Your Reward Gems",
      image: gemImage,
      theme: "purple",
    },
    {
      id: "ves",
      value: balance.ves,
      title: "Available VEs",
      subtitle: "Your VE Balance",
      image: veCoinImage,
      theme: "gold",
    },
  ];
  return (
    <section aria-label="Your Balance" className={styles.wrapper}>
      {balanceItems.map((item) => (
        <div key={item.id} className={`${styles.box} ${styles[item.theme]}`}>
          <div className={styles.labelRow}>
            <p>{item.title}</p>
            <button type="button" aria-label={`About ${item.title}`}>
              <Info aria-hidden="true" />
            </button>
          </div>
          <div className={styles.valueRow}>
            <img src={item.image} className={styles.image} alt="" />
            <span className={styles.value}>
              {item.value.toLocaleString("en-US")}
            </span>
          </div>
          <p className={styles.subtitle}>{item.subtitle}</p>
          <img
            src={item.image}
            aria-hidden="true"
            alt=""
            className={styles.watermark}
          />
        </div>
      ))}
    </section>
  );
}

export default BalanceOverview;
