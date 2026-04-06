export const colors = {
  primary: {
    neon: "#CCFF99",
    dark: "#1A2721",
    light: "#E6FFD9",
  },
  background: {
    dark: "#1A2721",
    light: "#FFFFFF",
    glass: "rgba(26, 39, 33, 0.9)",
  },
  text: {
    primary: "#CCFF99",
    secondary: "#E6FFD9",
    dark: "#1A2721",
    light: "#FFFFFF",
  },
  accent: {
    primary: "#CCFF99",
    secondary: "#99FF99",
  },
  overlay: {
    dark: "rgba(26, 39, 33, 0.8)",
    light: "rgba(255, 255, 255, 0.1)",
  },
} as const;

export type ColorScheme = typeof colors;

// Tailwind class generator functions
export const generateTextClasses = (
  variant: "modern" | "default" = "default"
) => {
  if (variant === "modern") {
    return {
      primary: "text-[#CCFF99]",
      secondary: "text-[#E6FFD9]",
      dark: "text-[#1A2721]",
      light: "text-white",
    };
  }
  return {
    primary: "text-white",
    secondary: "text-white/90",
    dark: "text-gray-800",
    light: "text-white",
  };
};

export const generateBgClasses = (
  variant: "modern" | "default" = "default"
) => {
  if (variant === "modern") {
    return {
      primary: "bg-[#1A2721]",
      secondary: "bg-[#CCFF99]",
      glass: "bg-[#1A2721]/90 backdrop-blur-md",
    };
  }
  return {
    primary: "bg-white",
    secondary: "bg-gray-100",
    glass: "bg-white/90 backdrop-blur-md",
  };
};
