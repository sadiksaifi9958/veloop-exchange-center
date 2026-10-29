import styles from "./ExchangeLoader.module.css";
import { gemPurpleImage, veCoinImage } from "../../data/exchangeData";
import { MoveRight, MoveLeft } from "lucide-react";
import PageBackground from "./PageBackground";

function ExchangeLoader() {
  return (
    <div role="status" className={styles.loader}>
      <PageBackground />
      <div className={styles.visual}>
        <img src={gemPurpleImage} alt="" className={styles.gem} />
        <span className={styles.arrows} aria-hidden="true">
          <MoveRight className={styles.arrowRight} />
          <MoveLeft className={styles.arrowLeft} />
        </span>
        <img src={veCoinImage} alt="" className={styles.coin} />
      </div>
      <p className={styles.text}>Preparing your reward conversions...</p>
    </div>
  );
}

export default ExchangeLoader;
