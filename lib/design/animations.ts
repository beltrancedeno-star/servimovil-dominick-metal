export const animation = {
  duration: {
    fast: 0.2,
    base: 0.35,
    slow: 0.5,
  },
  easing: {
    standard: "easeOut",
    smooth: [0.22, 1, 0.36, 1],
  },
  hover: {
    lift: { y: -8 },
    glow: "rgba(255, 107, 0, 0.16)",
  },
} as const;
