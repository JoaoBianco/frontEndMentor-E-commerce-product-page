export const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(29, 32, 38,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(29, 32, 38,1)",
  },
};

export const cart = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(105, 112, 125,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(105, 112, 125, 1)",
  },
};

export const hambuguerMenu = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const hambuguerMenuItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const leftSlide = {
  hidden: { x: "-1000px" },
  visible: { x: 0 },
};

export const rightSlide = {
  hidden: { x: "1000px" },
  visible: { x: 0 },
};
