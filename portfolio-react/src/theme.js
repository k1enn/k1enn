import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
    display: "'Archivo Black', 'Space Grotesk', sans-serif",
  },
  colors: {
    ink: {
      black: "#000000",
      white: "#FFFFFF",
      900: "#0A0A0A",
      800: "#1A1A1A",
      700: "#262626",
      500: "#737373",
      300: "#D4D4D4",
      200: "#E5E5E5",
      100: "#F5F5F5",
      50: "#FAFAFA",
    },
    bg: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
      card: "#FFFFFF",
      invert: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#404040",
      muted: "#737373",
      invert: "#FFFFFF",
    },
    border: {
      primary: "#000000",
      muted: "#000000",
    },
  },
  radii: {
    none: "0",
    sm: "0",
    base: "0",
    md: "0",
    lg: "0",
    xl: "0",
    "2xl": "0",
    full: "0",
    card: "0",
    button: "0",
  },
  shadows: {
    brutal: "6px 6px 0 0 #000000",
    brutalSm: "4px 4px 0 0 #000000",
    brutalLg: "10px 10px 0 0 #000000",
    brutalInvert: "6px 6px 0 0 #FFFFFF",
    focus: "0 0 0 3px #000000",
    soft: "4px 4px 0 0 #000000",
    lift: "8px 8px 0 0 #000000",
    brandGlow: "6px 6px 0 0 #000000",
  },
  styles: {
    global: {
      "html, body": {
        bg: "bg.primary",
        color: "text.primary",
        lineHeight: 1.5,
        scrollBehavior: "smooth",
      },
      "::selection": {
        bg: "ink.black",
        color: "ink.white",
      },
      "::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
      },
      "::-webkit-scrollbar-track": {
        background: "#FFFFFF",
        borderLeft: "2px solid #000000",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#000000",
        borderRadius: "0",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#262626",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "0",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        _focusVisible: {
          boxShadow: "focus",
          outline: "none",
        },
      },
      variants: {
        custom: {
          bg: "ink.black",
          color: "ink.white",
          border: "2px solid #000000",
          boxShadow: "brutal",
          _hover: {
            bg: "ink.white",
            color: "ink.black",
            transform: "translate(-2px, -2px)",
            boxShadow: "brutalLg",
          },
          _active: {
            transform: "translate(2px, 2px)",
            boxShadow: "none",
          },
          transition: "all 0.12s ease-out",
        },
        outline: {
          bg: "transparent",
          color: "ink.black",
          border: "2px solid #000000",
          boxShadow: "brutal",
          _hover: {
            bg: "ink.black",
            color: "ink.white",
            transform: "translate(-2px, -2px)",
            boxShadow: "brutalLg",
          },
          _active: {
            transform: "translate(2px, 2px)",
            boxShadow: "none",
          },
          transition: "all 0.12s ease-out",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 800,
        letterSpacing: "-0.03em",
        textTransform: "uppercase",
      },
    },
    Link: {
      baseStyle: {
        _focusVisible: {
          boxShadow: "focus",
          outline: "none",
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: "bg.card",
          borderRadius: "0",
          overflow: "hidden",
          border: "2px solid #000000",
          boxShadow: "brutal",
          transition: "transform 0.12s ease-out, box-shadow 0.12s ease-out",
          _hover: {
            transform: "translate(-2px, -2px)",
            boxShadow: "brutalLg",
          },
        },
      },
    },
  },
});

export default theme;
