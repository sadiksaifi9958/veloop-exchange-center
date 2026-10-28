import { MoveDown } from "lucide-react";
import { useEffect, useRef } from "react";
import styles from "./ExchangeModal.module.css";
import { veCoinImage } from "../../data/exchangeData";
import { motion } from "framer-motion";

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

export default function ExchangeModal({
  option,
  balance,
  onClose,
  onConfirm,
  isProcessing,
}) {
  const initialFocusRef = useRef(null);
  const canAfford = balance.gems >= option.requiredGems;
  const missingGems = option.requiredGems - balance.gems;

  useEffect(() => {
    initialFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !isProcessing) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, isProcessing]);

  return (
    <motion.div
      className={styles.overlay}
      onClick={isProcessing ? undefined : onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={`${styles.modal} ${styles[option.theme]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-busy={isProcessing}
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {canAfford ? (
          <>
            <h2 id="modal-title" className={styles.title}>
              Confirm Conversion
            </h2>
            <div className={styles.conversion}>
              <div className={styles.item}>
                <img src={option.image} alt={`${option.theme} gem`} />
                <span className={styles.gem}>{option.requiredGems} Gems</span>
              </div>
              <MoveDown size={20} aria-hidden="true" />
              <div className={styles.item}>
                <img src={veCoinImage} alt="VE coin" />
                <span className={styles.vecoin}>{option.receiveVEs} VEs</span>
              </div>
            </div>
            <dl className={styles.summary}>
              <div className={styles.row}>
                <dt className={styles.label}>Gems after conversion</dt>
                <dd className={styles.value}>
                  {formatNumber(balance.gems - option.requiredGems)}
                </dd>
              </div>
              <div className={styles.row}>
                <dt className={styles.label}>VEs after conversion</dt>
                <dd className={styles.value}>
                  {formatNumber(balance.ves + option.receiveVEs)}
                </dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <button
                ref={initialFocusRef}
                className={styles.cancelButton}
                onClick={onClose}
                type="button"
                disabled={isProcessing}
              >
                Cancel
              </button>
              <button
                className={styles.confirmButton}
                onClick={() => onConfirm(option)}
                type="button"
                disabled={isProcessing}
              >
                {isProcessing ? "Converting..." : "Confirm Conversion"}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 id="modal-title" className={styles.title}>
              Not enough Gems
            </h2>
            <div className={styles.item}>
              <img src={option.image} alt={`${option.theme} gem`} />
            </div>
            <dl className={styles.summary}>
              <div className={styles.row}>
                <dt className={styles.label}>Available Gems</dt>
                <dd className={styles.value}>{formatNumber(balance.gems)}</dd>
              </div>
              <div className={styles.row}>
                <dt className={styles.label}>Required Gems</dt>
                <dd className={styles.value}>
                  {formatNumber(option.requiredGems)}
                </dd>
              </div>
            </dl>
            <p className={styles.message}>
              You need {formatNumber(missingGems)} more Gems to unlock this
              conversion.
            </p>
            <div className={styles.actions}>
              <button
                ref={initialFocusRef}
                className={styles.cancelButton}
                onClick={onClose}
                type="button"
              >
                Close
              </button>
              <button
                className={`${styles.confirmButton} ${styles.earnButton}`}
                onClick={onClose}
                type="button"
              >
                Earn More Gems
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
