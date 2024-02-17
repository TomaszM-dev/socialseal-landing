export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      transition: {
        type: "tween",
        duration: 0.5,

        ease: [0, 0, 1, 1], // Setting the ease to linear
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: delay,
        ease: [0, 0, 1, 1], // Setting the ease to linear
      },
    },
  };
};
