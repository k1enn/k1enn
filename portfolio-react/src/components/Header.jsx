import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Icon, Progress, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import HoverAnimatedText from "./HoverAnimatedText";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionProgress = motion(Progress);

const Header = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    // Calculate progress percentage
    const startDate = new Date("August 1, 2023").getTime();
    const endDate = new Date("August 1, 2027").getTime();
    const currentDate = new Date().getTime();

    const totalDuration = endDate - startDate;
    const elapsed = currentDate - startDate;
    const progress = Math.min(
      Math.max((elapsed / totalDuration) * 100, 0),
      100
    );

    // Add 2 second delay before starting animation
    const animationDelay = setTimeout(() => {
      // Animate progress loading
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress >= progress) {
          clearInterval(interval);
        } else {
          currentProgress += 1;
          setProgressValue(currentProgress);
        }
      }, 50);

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(animationDelay);
  }, []);

  return (
    <Box
      id="header"
      as="header"
      role="banner"
      minH={["100vh", "100dvh"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="bg.primary"
      position="relative"
      backgroundImage="linear-gradient(rgba(15, 15, 20, 0.78), rgba(15, 15, 20, 0.92)), url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      _after={{
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "180px",
        background:
          "linear-gradient(to top, var(--chakra-colors-bg-primary), transparent)",
        pointerEvents: "none",
      }}
    >
      <MotionBox
        bg="rgba(15, 15, 20, 0.72)"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="rgba(255,255,255,0.06)"
        p={["2rem 1.25rem", "2.5rem"]}
        m={["2rem 1.5rem", "0rem"]}
        borderRadius="card"
        boxShadow="lift"
        maxWidth="620px"
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Heading
          as="h1"
          fontSize={["2.5rem", "3.5rem"]}
          mb="1rem"
          bgGradient="linear(90deg, brand.primary, brand.accent)"
          bgClip="text"
        >
          <HoverAnimatedText text="I'm Trung Kien" delay={1} />
        </Heading>
        <MotionText
          fontSize={["1rem", "1.2rem"]}
          color="text.primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          A passionate programmer, and future back-end developer from Vietnam.
        </MotionText>

        {/* Graduation Progress Bar */}
        <MotionBox
          mt={6}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          <VStack spacing={2} align="stretch">
            <Text fontSize="sm" color="text.secondary" textAlign="left">
              Road to Graduation
            </Text>
            <MotionProgress
              value={progressValue}
              size="sm"
              borderRadius="full"
              hasStripe
              isAnimated
              sx={{
                "& > div": {
                  background: "#6a6aff", // Your custom hex color (blue-purple)
                },
              }}
            />
            <Text fontSize="xs" color="text.secondary" textAlign="right">
              {progressValue.toFixed(1)}%
            </Text>
          </VStack>
        </MotionBox>
      </MotionBox>

      <MotionBox
        position="absolute"
        bottom="50px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="5"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, -20, 0],
        }}
        transition={{
          delay: 3,
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Icon
          as={BsChevronDown}
          w={8}
          h={8}
          color="text.primary"
          cursor="pointer"
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          onClick={() => {
            const tech = document.getElementById("technology");
            if (tech) {
              tech.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollTo({
                top: window.innerHeight - 28,
                behavior: "smooth",
              });
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              const tech = document.getElementById("technology");
              if (tech) tech.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default Header;
