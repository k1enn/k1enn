import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import Connect from "../components/Connect";
import Projects from "../components/Projects";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Technology from "../components/Technology";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
const HomePage = ({ showOverlay }) => {
  return (
    <Container maxW="100%" p="0" m="0" overflow="hidden">
      <Navbar />

      <Box display={["none", null, "block"]}>
        <Navigation />
      </Box>
      <Box width="100%">
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
