import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

function AnimatedNumber({ value }) {
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      previousValue.current = value;
      return;
    }

    const controls = animate(previousValue.current, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        previousValue.current = latest;
        setDisplay(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [value, shouldReduceMotion]);

  const shownValue = shouldReduceMotion ? value : display;

  return <>{shownValue.toLocaleString("en-US")}</>;
}

export default AnimatedNumber;
