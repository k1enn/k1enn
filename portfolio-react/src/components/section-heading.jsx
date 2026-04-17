import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

const SectionHeading = ({ children, as = "h2", id, ...rest }) => {
  return (
    <Flex direction="column" align="center" mb="2.5rem" {...rest}>
      <MotionHeading
        as={as}
        id={id}
        fontSize={["2rem", "2.5rem"]}
        textAlign="center"
        bgGradient="linear(90deg, brand.primary, brand.accent)"
        bgClip="text"
        fontWeight="800"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </MotionHeading>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 72, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          height: 3,
          marginTop: 10,
          borderRadius: 3,
          background:
            "linear-gradient(90deg, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-accent))",
        }}
        aria-hidden="true"
      />
    </Flex>
  );
};

export default SectionHeading;
