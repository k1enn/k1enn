import React from 'react';
import { Box } from "@chakra-ui/react";
import Overlay from '../components/Overlay';
import Header from '../components/Header';
import Connect from '../components/Connect';
import Projects from '../components/Projects';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Technology from '../components/Technology';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = ({ showOverlay }) => {
  return (
    <Box>
      <Navigation />
      <ScrollToTop />
      {showOverlay && <Overlay />}
      <Header />
      <Technology />
      <Connect />
      <Projects />
      <Footer />
    </Box>
  );
}

export default HomePage