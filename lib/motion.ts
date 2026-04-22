import { Variants } from "framer-motion"

// TIMING CONSTANTS
export const TRANSITION_FAST = { duration: 0.2, ease: "easeOut" as const }
export const TRANSITION_MEDIUM = { duration: 0.5, ease: "easeOut" as const }
export const TRANSITION_SLOW = { duration: 0.8, ease: "easeOut" as const }

// 1. FADE + SLIDE UP (Sections, Text, Single Elements)
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION_MEDIUM
  }
}

export const fadeUpSlowVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION_SLOW
  }
}

// 2. STAGGER CONTAINERS (Grids, Lists)
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Child of staggerContainerVariant
export const staggerItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION_MEDIUM
  }
}

// 3. HOVER INTERACTIONS (Cards)
export const cardHoverVariant = {
  hover: {
    y: -4,
    scale: 1.01,
    transition: TRANSITION_FAST
  }
}

export const buttonHoverVariant = {
  hover: {
    scale: 1.03,
    transition: TRANSITION_FAST
  }
}
