"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface GlideSectionProps {
  children: React.ReactNode;
  index: number;
  speedMultiplier?: number;
}

export function GlideSection({ children, index, speedMultiplier = 1 }: GlideSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [baseAmount, setBaseAmount] = useState(-100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBaseAmount(-150); // Mobile base
      } else if (window.innerWidth < 1024) {
        setBaseAmount(-250); // Tablet base
      } else {
        setBaseAmount(-380); // Desktop base (much faster scrolling)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translationAmount = baseAmount * speedMultiplier;

  // Track the scroll position of the section relative to the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Calculate the raw translation
  const rawY = useTransform(scrollYProgress, [0, 1], [0, translationAmount]);
  
  // Wrap in a spring for buttery smooth movement
  const y = useSpring(rawY, {
    stiffness: 70,
    damping: 20,
    mass: 0.8
  });

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        position: "relative",
        zIndex: index,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
