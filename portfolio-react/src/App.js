import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import Overlay from './components/Overlay';
import Header from './components/Header';
import Connect from './components/Connect';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if document and fonts are loaded
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 800);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setIsLoading(false), 800);
      });
    }

    return () => {
      window.removeEventListener('load', () => {
        setIsLoading(false);
      });
    };
  }, []);

  useEffect(() => {
    // Hide overlay after 3 seconds
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Prevent scrolling when overlay is visible or loading
  useEffect(() => {
    if (showOverlay || isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showOverlay, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box>
      <Navigation />
      <ScrollToTop />
      {showOverlay && <Overlay />}
      <Header />
      <Connect />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
