import { useState, useEffect, useRef } from "react";
import { Info } from "lucide-react";
import styles from "./InfoTooltip.module.css";
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
      {isOpen && (
        <div role="tooltip" className={styles.box}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      )}
    </div>
  );
}

export default InfoTooltip;
