import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Overlay = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor="bg.primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      zIndex="9999"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
      style={{ pointerEvents: "none" }}
    >
      <MotionHeading
        as="span"
        fontSize={["2.5rem", "3.5rem"]}
        fontWeight="800"
        textAlign="center"
        bgGradient="linear(to-r, brand.primary, brand.accent)"
        bgClip="text"
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TypeAnimation sequence={["Hello there"]} speed={50} repeat={1} />
      </MotionHeading>
      <Text mt={4} fontSize="sm" color="text.muted">
        Loading portfolio…
      </Text>
    </MotionBox>
  );
};

export default Overlay;
