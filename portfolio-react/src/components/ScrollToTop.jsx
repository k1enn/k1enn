import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const MotionBox = motion(Box);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: 16, transition: { duration: 0.15 } });
    }
  }, [isVisible, controls]);

  return (
    <MotionBox
      as="button"
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={controls}
      initial={{ opacity: 0, y: 16 }}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      position="fixed"
      bottom={["16px", "30px"]}
      right={["16px", "30px"]}
      zIndex={99}
      w="48px"
      h="48px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="ink.black"
      color="ink.white"
      border="2px solid #000000"
      boxShadow="brutal"
      cursor="pointer"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      _hover={{
        bg: "ink.white",
        color: "ink.black",
        boxShadow: "brutalLg",
      }}
      _focusVisible={{
        outline: "3px solid #000000",
        outlineOffset: "2px",
      }}
    >
      <Box as={FaArrowUp} aria-hidden="true" />
    </MotionBox>
  );
};

export default ScrollToTop;
