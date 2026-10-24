import styles from "./RewardBanner.module.css";
import { Crown } from "lucide-react";
function RewardBanner({ content }) {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <Crown aria-hidden="true" className={styles.icon} />
        <div>
          <h3 className={styles.title}>{content.title}</h3>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>
      </div>
      <img
        src={content.image}
        alt=""
        aria-hidden="true"
        className={styles.image}
      />
    </section>
  );
}

export default RewardBanner;
