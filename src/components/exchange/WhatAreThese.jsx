import { ChevronRight } from "lucide-react";
import styles from "./WhatAreThese.module.css";
function WhatAreThese({ items }) {
  return (
    <aside aria-label="What are these" className={styles.panel}>
      <h2 className={styles.title}>What are these?</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            <img
              src={item.image}
              aria-hidden="true"
              className={styles.image}
              alt=""
            />
            <div>
              <h3 className={styles.name}>{item.name}</h3>
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
