import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const controls = animate(previousValue.current, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <>{display.toLocaleString("en-US")}</>;
}

export default AnimatedNumber;
