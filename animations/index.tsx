const sectionFadeScale = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 1 },
  variants: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  },
};

const sectionFade = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 1 },
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
};

const sectionFadeRight = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 1 },
  variants: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  },
};

const sectionFadeLeft = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 1 },
  variants: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  },
};

const sectionFadeUp = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 1 },
  variants: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  },
};

const rotateOnce = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 1 },
  animate: {
    rotate: 340,
  },
};

export {
  sectionFade,
  sectionFadeScale,
  sectionFadeRight,
  sectionFadeLeft,
  sectionFadeUp,
  rotateOnce
};
