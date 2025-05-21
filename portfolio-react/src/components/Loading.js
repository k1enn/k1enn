import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Loading = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="bg.primary"
      zIndex={9999}
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.3
          }
        }}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.700"
          color="brand.primary"
          size="xl"
        />
      </MotionBox>
    </Box>
  );
};

export default Loading; 