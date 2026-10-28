import { useEffect, useRef } from "react";
import { motion, useIsPresent } from "framer-motion";
import { CircleCheck, ArrowRight } from "lucide-react";
import { veCoinImage } from "../../data/exchangeData";
import styles from "./ConversionSuccess.module.css";

const SPARK_COUNT = 6;

function ConversionSuccess({ option, onContinue }) {
  const continueButtonRef = useRef(null);
  const isPresent = useIsPresent();

  function handleContinue() {
    if (!isPresent) return;
    onContinue();
  }

  useEffect(() => {
    continueButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isPresent) onContinue();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onContinue, isPresent]);

  return (
    <motion.div
      className={styles.overlay}
      onClick={handleContinue}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={`${styles.modal} ${styles[option.theme]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.iconWrap}>
          <CircleCheck aria-hidden="true" size={40} className={styles.icon} />
          <span className={styles.sparks} aria-hidden="true">
            {Array.from({ length: SPARK_COUNT }, (_, index) => (
              <span key={index} className={styles.spark} />
            ))}
          </span>
        </div>

        <h2 id="success-title" className={styles.title}>
          Conversion Complete
        </h2>

        <div className={styles.visuals}>
          <img src={option.image} alt={`${option.theme} gem`} />
          <ArrowRight size={20} aria-hidden="true" />
          <img src={veCoinImage} alt="VE coin" />
        </div>

        <p className={styles.gems}>{option.requiredGems} Gems converted</p>
        <p className={styles.ves}>+{option.receiveVEs} VEs</p>
        <p className={styles.note}>added to your balance</p>

        <button
          ref={continueButtonRef}
          onClick={handleContinue}
          type="button"
          className={styles.continueButton}
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ConversionSuccess;
