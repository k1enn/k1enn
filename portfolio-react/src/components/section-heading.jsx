import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const SectionHeading = ({ children, as = "h2", id, index, ...rest }) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      mb={["2rem", "3rem"]}
      borderBottom="2px solid"
      borderColor="ink.black"
      pb={4}
      {...rest}
    >
      <Flex align="baseline" gap={3} flexWrap="wrap">
        {index !== undefined && (
          <Text
            fontFamily="mono"
            fontSize={["sm", "md"]}
            color="ink.500"
            letterSpacing="0.1em"
          >
            {String(index).padStart(2, "0")} /
          </Text>
        )}
        <MotionHeading
          as={as}
          id={id}
          fontFamily="display"
          fontSize={["2.5rem", "3.5rem", "4.5rem"]}
          lineHeight="0.95"
          letterSpacing="-0.04em"
          color="ink.black"
          textTransform="uppercase"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </MotionHeading>
      </Flex>
      <MotionBox
        mt={2}
        h="6px"
        bg="ink.black"
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.35, delay: 0.1 }}
        aria-hidden="true"
      />
    </Flex>
  );
};

export default SectionHeading;
