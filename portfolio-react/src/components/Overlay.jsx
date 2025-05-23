import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Overlay = () => {
  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor="bg.primary"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="9999"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
    >
      <MotionHeading
        fontSize="3.5rem"
        fontWeight="800"
        textAlign="center"
        bgGradient="linear(to-r, brand.primary, #9999ff)"
        bgClip="text"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <TypeAnimation
        sequence={['Hello there']}
        speed={50}
        repeat={1}
      />
      </MotionHeading>
    </MotionBox>
  );
};

export default Overlay; 