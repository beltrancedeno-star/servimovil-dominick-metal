export const colors = {
  blackMate: "#0A0A0A",
  grafito: "#1A1A1A",
  acero: "#2D2D2D",
  plata: "#8A8A8A",
  white: "#FFFFFF",
  naranja: "#FF6B00",
} as const;

export const semanticColors = {
  background: colors.blackMate,
  surface: colors.grafito,
  surfaceElevated: colors.acero,
  textPrimary: colors.white,
  textSecondary: colors.plata,
  accent: colors.naranja,
  border: "rgba(255,255,255,0.1)",
} as const;
