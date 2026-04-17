import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  colors: {
    brand: {
      primary: "#4d4dff",
      hover: "#6a6aff",
      accent: "#9999ff",
    },
    bg: {
      primary: "#0f0f14",
      secondary: "#171720",
      card: "#1f1f2a",
      hover: "#2a2a38",
    },
    text: {
      primary: "#f5f5f7",
      secondary: "#c2c2cc",
      muted: "#8a8a99",
    },
  },
  radii: {
    card: "12px",
    button: "8px",
  },
  shadows: {
    soft: "0 4px 12px rgba(0, 0, 0, 0.25)",
    lift: "0 12px 28px rgba(0, 0, 0, 0.35)",
    brandGlow: "0 8px 24px rgba(77, 77, 255, 0.35)",
    focus: "0 0 0 3px rgba(106, 106, 255, 0.5)",
  },
  styles: {
    global: {
      "html, body": {
        bg: "bg.primary",
        color: "text.primary",
        lineHeight: 1.6,
        scrollBehavior: "smooth",
      },
      "::selection": {
        bg: "brand.primary",
        color: "white",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "bg.primary",
      },
      "::-webkit-scrollbar-thumb": {
        background: "brand.primary",
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "brand.hover",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "button",
        fontWeight: 600,
        _focusVisible: {
          boxShadow: "focus",
        },
      },
      variants: {
        custom: {
          bg: "brand.primary",
          color: "white",
          _hover: {
            bg: "brand.hover",
            transform: "translateY(-2px)",
            boxShadow: "brandGlow",
          },
          _active: {
            transform: "translateY(0)",
          },
          transition: "all 0.2s ease",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
    },
    Link: {
      baseStyle: {
        _focusVisible: {
          boxShadow: "focus",
          borderRadius: "4px",
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: "bg.card",
          borderRadius: "card",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "soft",
          _hover: {
            transform: "translateY(-6px)",
            boxShadow: "lift",
          },
        },
      },
    },
  },
});

export default theme;
