import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="ink.white"
      zIndex={9999}
      gap={4}
    >
      <Box display="flex" gap={2}>
        {[0, 1, 2, 3].map((i) => (
          <MotionBox
            key={i}
            w="14px"
            h="40px"
            bg="ink.black"
            animate={{
              scaleY: [1, 0.4, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>
      <Text
        fontFamily="mono"
        fontSize="xs"
        textTransform="uppercase"
        letterSpacing="0.2em"
        color="ink.black"
      >
        Loading
      </Text>
    </Box>
  );
};

export default Loading;
