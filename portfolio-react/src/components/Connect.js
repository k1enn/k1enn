import React from 'react';
import { Box, Heading, HStack, Link, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaDiscord, FaFacebook } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { Container } from '@chakra-ui/react';
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Connect = () => {
  const iconSize = useBreakpointValue({ base: 24, md: 36, lg: 40 });
  
  const socialLinks = [
    {
      url: "https://linkedin.com/in/k1enn",
      icon: FaLinkedin
    },
    {
      url: "https://www.github.com/k1enn",
      icon: FaGithub
    },
    {
      url: "https://www.youtube.com/@iamk1en",
      icon: FaYoutube
    },
    {
      url: "https://codeforces.com/profile/dinhtrungkien",
      icon: SiCodeforces
    },
    {
      url: "https://www.leetcode.com/iamk1en",
      icon: SiLeetcode
    },
    {
      url: "https://discord.gg/sincos",
      icon: FaDiscord
    },
    {
      url: "https://www.facebook.com/imnotk1en",
      icon: FaFacebook
    }
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
      id="connect"
      p={["3rem 1rem", "5rem 2rem"]}
      position="relative"
      bg="rgba(0, 0, 0, 0.02)"
    >
        <Container maxW="container.lg">
        <MotionHeading
          as="h2"
          fontSize={["2rem", "2.5rem"]}
          mb="2.5rem"
          textAlign="center"
          bgGradient="linear(90deg, brand.primary, #9999ff)"
          bgClip="text"
          fontWeight="800"
          position="relative"
          display="inline-block"
          _after={{
            content: "''",
            position: "absolute",
            left: "20%",
            transform: "translateX(-50%)",
            bottom: "-10px",
            width: "60px",
            height: "3px",
            background:
              "linear-gradient(90deg, var(--chakra-colors-brand-primary), #9999ff)",
            borderRadius: "3px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Connect with me
        </MotionHeading>
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
          {socialLinks.map((social, index) => (
            <MotionBox 
              key={index}
              as={Link}
              href={social.url}
              isExternal
              display="flex"
              justifyContent="center"
              alignItems="center"
              w={["60px", "70px"]}
              h={["60px", "70px"]}
              borderRadius="50%"
              bg="rgba(255, 255, 255, 0.1)"
              color="text.primary"
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-3px) scale(1.20)",
                boxShadow: "0 6px 30px rgba(79, 79, 241, 0.4)",
                bg: "brand.primary",
                color: "white",
              }}
              variants={item}
            >
              <Box as={social.icon} size={iconSize} />
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
  );
};

export default Connect;