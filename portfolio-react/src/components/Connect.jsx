import React from "react";
import {
  Box,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { Container } from "@chakra-ui/react";
import SectionHeading from "./section-heading";
const MotionBox = motion(Box);

const Connect = () => {
  const iconSize = useBreakpointValue({ base: 24, md: 36, lg: 40 });

  const socialLinks = [
    { url: "https://linkedin.com/in/k1enn", icon: FaLinkedin, label: "LinkedIn" },
    { url: "https://www.github.com/k1enn", icon: FaGithub, label: "GitHub" },
    { url: "https://www.youtube.com/@iamk1en", icon: FaYoutube, label: "YouTube" },
    { url: "https://codeforces.com/profile/dinhtrungkien", icon: SiCodeforces, label: "Codeforces" },
    { url: "https://www.leetcode.com/iamk1en", icon: SiLeetcode, label: "LeetCode" },
    { url: "https://discord.gg/Wk9rmt83v8", icon: FaDiscord, label: "Discord" },
    { url: "https://www.facebook.com/imnotk1en", icon: FaFacebook, label: "Facebook" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <Box
      as="section"
      id="connect"
      aria-labelledby="connect-heading"
      p={["3rem 1rem", "5rem 2rem"]}
      position="relative"
    >
      <Container maxW="container.lg">
        <SectionHeading id="connect-heading">Connect with me</SectionHeading>
      </Container>

      <MotionBox
        as={HStack}
        spacing={[3, 4, 6]}
        justify="center"
        wrap="wrap"
        mt={6}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {socialLinks.map((social) => (
          <MotionBox
            key={social.label}
            as={Link}
            href={social.url}
            isExternal
            aria-label={`${social.label} profile (opens in new tab)`}
            rel="noopener noreferrer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            w={["56px", "68px"]}
            h={["56px", "68px"]}
            borderRadius="full"
            bg="rgba(255, 255, 255, 0.06)"
            color="text.primary"
            border="1px solid"
            borderColor="rgba(255,255,255,0.08)"
            position="relative"
            transition="all 0.25s ease"
            _hover={{
              transform: "translateY(-3px) scale(1.08)",
              boxShadow: "brandGlow",
              bg: "brand.primary",
              color: "white",
              borderColor: "brand.hover",
            }}
            _focusVisible={{
              boxShadow: "focus",
              outline: "none",
            }}
            variants={item}
          >
            <Box as={social.icon} size={iconSize} aria-hidden="true" />
          </MotionBox>
        ))}
      </MotionBox>
    </Box>
  );
};

export default Connect;
