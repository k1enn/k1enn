import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    brand: {
      primary: "#4d4dff",
      hover: "#6a6aff",
    },
    bg: {
      primary: "#121212",
      secondary: "#1e1e1e",
      card: "#252525",
      hover: "#333333",
    },
    text: {
      primary: "#f0f0f0",
      secondary: "#b3b3b3",
    },
  },
  styles: {
    global: {
      body: {
        bg: "bg.primary",
        color: "text.primary",
        lineHeight: 1.6,
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
      variants: {
        custom: {
          bg: "brand.primary",
          color: "white",
          _hover: {
            bg: "brand.hover",
            transform: "translateY(-2px)",
            boxShadow: "0 5px 15px rgba(77, 77, 255, 0.4)",
          },
          transition: "all 0.3s ease",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: "bg.card",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          _hover: {
            transform: "translateY(-10px)",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
  },
});

export default theme; 