"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GlideSectionProps {
  children: React.ReactNode;
  index: number;
}

export function GlideSection({ children, index }: GlideSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [translationAmount, setTranslationAmount] = useState(-100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTranslationAmount(-90); // Mobile: 0px -> -90px (faster)
      } else if (window.innerWidth < 1024) {
        setTranslationAmount(-120); // Tablet: 0px -> -120px (faster)
      } else {
        setTranslationAmount(-150); // Desktop: 0px -> -150px (faster)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track the scroll position of the section relative to the viewport.
  // We track from when the top of the section enters the bottom of the viewport ("start end")
  // to when the top of the section reaches the top of the viewport ("start start").
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Use a smooth exponential transition (or standard ease) for vertical movement
  const y = useTransform(scrollYProgress, [0, 1], [0, translationAmount]);

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
