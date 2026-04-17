import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
      bg="ink.black"
      color="ink.white"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      px={["1.5rem", "3rem"]}
      zIndex="9999"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
      style={{ pointerEvents: "none" }}
    >
      <Text
        fontFamily="mono"
        fontSize={["xs", "sm"]}
        mb={4}
        letterSpacing="0.15em"
        textTransform="uppercase"
        color="ink.300"
      >
        // booting...
      </Text>
      <MotionHeading
        as="span"
        fontFamily="display"
        fontSize={["3rem", "5rem", "7rem"]}
        lineHeight="0.9"
        letterSpacing="-0.04em"
        textTransform="uppercase"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TypeAnimation sequence={["Hello there."]} speed={50} repeat={0} cursor={true} />
      </MotionHeading>
      <Box mt={6} h="6px" w="120px" bg="ink.white" />
    </MotionBox>
  );
};

export default Overlay;
