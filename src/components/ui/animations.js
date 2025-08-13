export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      duration: 0.3 
    }
  }
};

export const cardHover = {
  hover: { y: -10 },
  tap: { scale: 0.98 }
};