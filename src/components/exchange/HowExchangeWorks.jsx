import { motion, useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";
import styles from "./HowExchangeWorks.module.css";

const HIDDEN_LINE = "inset(-1rem 100% -1rem 0)";
const SHOWN_LINE = "inset(-1rem 0% -1rem 0)";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function HowExchangeWorks({ steps }) {
  const shouldReduceMotion = useReducedMotion();

  const lineVariants = {
    hidden: { clipPath: shouldReduceMotion ? SHOWN_LINE : HIDDEN_LINE },
    visible: {
      clipPath: SHOWN_LINE,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        How Exchange Works{" "}
        <button
          type="button"
          aria-label="About How Exchange Works"
          className={styles.infoButton}
        >
          <Info aria-hidden="true" />
        </button>
      </h2>
      <motion.ol
        className={styles.steps}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.step}
              className={`${styles.step} ${styles[item.theme]}`}
              variants={stepVariants}
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
              {index < steps.length - 1 && (
                <motion.span
                  className={styles.line}
                  variants={lineVariants}
                  aria-hidden="true"
                />
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}

export default HowExchangeWorks;
