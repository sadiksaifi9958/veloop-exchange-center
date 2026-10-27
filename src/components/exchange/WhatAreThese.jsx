import { ChevronRight } from "lucide-react";
import InfoTooltip from "./InfoTooltip";
import { infoTooltip } from "../../data/exchangeData";
import styles from "./WhatAreThese.module.css";

function WhatAreThese({ items }) {
  return (
    <aside aria-label="What are these" className={styles.panel}>
      <h2 className={styles.title}>What are these?</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={`${styles.iconWrap} ${styles[item.theme]}`}>
              <img src={item.image} alt="" aria-hidden="true" />
            </span>
            <div>
              <div className={styles.nameRow}>
                <h3 className={styles.name}>{item.name}</h3>
                <InfoTooltip
                  title={infoTooltip[item.infoKey].title}
                  text={infoTooltip[item.infoKey].text}
                  label={`About ${item.name}`}
                />
              </div>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="#exchange-rules" className={styles.link}>
        View All Rules
        <ChevronRight aria-hidden="true" />
      </a>
    </aside>
  );
}

export default WhatAreThese;
