import React from "react";
import { Box, SimpleGrid, Link, Container, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import SectionHeading from "./section-heading";

const MotionBox = motion(Box);

const SOCIAL_LINKS = [
  { url: "https://linkedin.com/in/k1enn", icon: FaLinkedin, label: "LinkedIn", handle: "@k1enn" },
  { url: "https://www.github.com/k1enn", icon: FaGithub, label: "GitHub", handle: "@k1enn" },
  { url: "https://www.youtube.com/@iamk1en", icon: FaYoutube, label: "YouTube", handle: "@iamk1en" },
  { url: "https://codeforces.com/profile/dinhtrungkien", icon: SiCodeforces, label: "Codeforces", handle: "dinhtrungkien" },
  { url: "https://www.leetcode.com/iamk1en", icon: SiLeetcode, label: "LeetCode", handle: "iamk1en" },
  { url: "https://discord.gg/Wk9rmt83v8", icon: FaDiscord, label: "Discord", handle: "k1en" },
  { url: "https://www.facebook.com/imnotk1en", icon: FaFacebook, label: "Facebook", handle: "imnotk1en" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Connect = () => {
  return (
    <Box
      as="section"
      id="connect"
      aria-labelledby="connect-heading"
      py={["4rem", "6rem"]}
      px={["1.25rem", "2rem"]}
      bg="ink.white"
      borderTop="2px solid"
      borderColor="ink.black"
    >
      <Container maxW="1280px" p={0}>
        <SectionHeading id="connect-heading" index={2}>
          Connect
        </SectionHeading>

        <MotionBox
          as={SimpleGrid}
          columns={{ base: 2, sm: 3, md: 4 }}
          spacing={0}
          border="2px solid"
          borderColor="ink.black"
          bg="ink.white"
          boxShadow="brutal"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          sx={{
            "& > *": {
              borderRight: "2px solid #000000",
              borderBottom: "2px solid #000000",
            },
          }}
        >
          {SOCIAL_LINKS.map((social) => (
            <MotionBox
              key={social.label}
              as={Link}
              href={social.url}
              isExternal
              aria-label={`${social.label} — ${social.handle} (opens in new tab)`}
              rel="noopener noreferrer"
              variants={item}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              gap={3}
              p={[4, 5]}
              minH={["140px", "160px"]}
              bg="ink.white"
              color="ink.black"
              transition="all 0.12s ease-out"
              _hover={{
                bg: "ink.black",
                color: "ink.white",
                textDecoration: "none",
              }}
              _focusVisible={{
                outline: "none",
                bg: "ink.black",
                color: "ink.white",
              }}
            >
              <Flex w="100%" justify="space-between" align="center">
                <Box as={social.icon} fontSize={["28px", "32px"]} aria-hidden="true" />
                <Text fontFamily="mono" fontSize="xs" letterSpacing="0.1em">↗</Text>
              </Flex>
              <Box>
                <Text
                  fontFamily="display"
                  fontSize={["md", "lg"]}
                  textTransform="uppercase"
                  letterSpacing="-0.02em"
                  lineHeight="1"
                >
                  {social.label}
                </Text>
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  mt={1}
                  textTransform="lowercase"
                  letterSpacing="0.04em"
                >
                  {social.handle}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Connect;
