import { MoveDown } from "lucide-react";
import styles from "./ExchangeModal.module.css";

export default function ExchangeModal({ option, balance, onClose, onConfirm }) {
  const canAfford = balance.gems >= option.requiredGems;
  const missingGems = option.requiredGems - balance.gems;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        {canAfford ? (
          <>
            <h2 id="modal-title" className={styles.title}>
              Confirm Conversion
            </h2>
            <div className={styles.conversion}>
              <span className={styles.gems}>{option.requiredGems} Gems</span>
              <MoveDown size={20} aria-hidden="true" />
              <span className={styles.ves}>{option.receiveVEs} VEs</span>
            </div>
            <h4 className={styles.subtitle}>After conversion your balance</h4>
            <p className={styles.balance}>
              {balance.gems - option.requiredGems} Gems
            </p>
            <p className={styles.balance}>
              {balance.ves + option.receiveVEs} VEs
            </p>
            <div className={styles.actions}>
              <button
                className={styles.cancelButton}
                onClick={onClose}
                type="button"
              >
                Cancel
              </button>
              <button
                className={styles.confirmButton}
                onClick={() => onConfirm(option)}
                type="button"
              >
                Convert
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 id="modal-title" className={styles.title}>
              Not enough Gems
            </h2>
            <p className={styles.balance}>Your Gems: {balance.gems}</p>
            <p className={styles.balance}>
              Required Gems: {option.requiredGems}
            </p>
            <p className={styles.message}>
              You need {missingGems} more Gems to unlock this conversion.
            </p>
            <div className={styles.actions}>
              <button
                className={styles.cancelButton}
                onClick={onClose}
                type="button"
              >
                Close
              </button>
              <button className={styles.confirmButton} type="button">
                Earn More Gems
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
