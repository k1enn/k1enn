import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import Connect from "../components/Connect";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Technology from "../components/Technology";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";

const HomePage = ({ showOverlay }) => {
  return (
    <Container maxW="100%" p="0" m="0" overflow="hidden" bg="ink.white">
      <Box
        as="a"
        href="#header"
        position="absolute"
        left="-9999px"
        top="8px"
        bg="ink.black"
        color="ink.white"
        px={3}
        py={2}
        border="2px solid #000000"
        zIndex={10000}
        fontFamily="mono"
        fontSize="sm"
        textTransform="uppercase"
        _focusVisible={{ left: "8px", outline: "none" }}
      >
        Skip to content
      </Box>

      <Navbar />

      <Box as="main" width="100%">
        <ScrollToTop />
        {showOverlay && <Overlay />}
        <Header />
        <Technology />
        <Connect />
        <Projects />
        <Footer />
      </Box>
    </Container>
  );
};

export default HomePage;
