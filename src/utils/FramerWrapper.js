import React from "react";
import { motion } from "framer-motion";

export function FramerWrapper({
  children,
  hidden,
  visible,
  duration,
  ease = "easeInOut",
  delay = 0,
  fullWidth,
  className,
  boxShadow,
  overflowHidden = true,
}) {
  return (
    <div
      style={{
        overflow: overflowHidden ? "hidden" : "none",
        width: fullWidth ? "100%" : "inherit",
      }}
      className={className}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ ease: ease, duration: duration, delay: delay }}
        variants={{
          visible: visible,
          hidden: hidden,
        }}
        style={{
          width: fullWidth ? "100%" : "inherit",
          height: "100%",
          boxShadow,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
