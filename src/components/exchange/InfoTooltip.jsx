import { useState, useEffect, useRef } from "react";
import { Info } from "lucide-react";
import styles from "./InfoTooltip.module.css";
import { motion, AnimatePresence } from "framer-motion";

function InfoTooltip({ title, text, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
      if (!wrapperRef.current.contains(event.target)) setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
      >
        <Info aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="tooltip"
            className={styles.box}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{ x: "-50%" }}
          >
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InfoTooltip;
