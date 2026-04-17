import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const MotionButton = motion(IconButton);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

  return (
    <MotionButton
      aria-label="Scroll to top"
      icon={<FaArrowUp aria-hidden="true" />}
      size="md"
      bg="brand.primary"
      color="white"
      _hover={{ bg: 'brand.hover' }}
      _active={{ bg: 'brand.hover' }}
      borderRadius="full"
      position="fixed"
      bottom={['16px', '30px']}
      right={['16px', '30px']}
      zIndex={99}
      minW="48px"
      minH="48px"
      boxShadow="lift"
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    />
  );
};

export default ScrollToTop; 