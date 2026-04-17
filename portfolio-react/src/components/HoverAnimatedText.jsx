import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const MotionText = motion(Text);

const HoverAnimatedText = ({ text, delay = 0, ...props }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
        duration: 0.3,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    }));
  }, [controls, delay]);

  const letters = text.split("");

  return (
    <Text as="span" display="inline-block" {...props}>
      {letters.map((char, i) => (
        <MotionText
          as="span"
          key={i}
          display="inline-block"
          initial={{ opacity: 0, y: 20 }}
          custom={i}
          animate={controls}
          whileHover={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
            transition: { duration: 0.1 },
          }}
          px={char === " " ? 0 : "1px"}
        >
          {char === " " ? "\u00A0" : char}
        </MotionText>
      ))}
    </Text>
  );
};

export default HoverAnimatedText;
