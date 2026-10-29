import { backgroundItems } from "../../data/exchangeData";
import styles from "./PageBackground.module.css";

function PageBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      {backgroundItems.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt=""
          className={`${styles.item} ${item.soft ? styles.soft : ""} ${
            item.hideOnMobile ? styles.hideMobile : ""
          }`}
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default PageBackground;
