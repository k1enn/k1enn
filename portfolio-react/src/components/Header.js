import React from 'react';
import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';
import AnimatedText from './AnimatedText';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Header = () => {
  return (
    <Box
      id="header"
      as="header"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="bg.primary"
      position="relative"
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      _after={{
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '150px',
        background: 'linear-gradient(to top, var(--chakra-colors-bg-primary), transparent)'
      }}
    >
      <MotionBox
        bg="rgba(18, 18, 18, 0.8)"
        p="2rem"
        borderRadius="8px"
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
        maxWidth="600px"
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Heading
          fontSize={["2.5rem", "3.5rem"]}
          mb="1rem"
          bgGradient="linear(90deg, brand.primary, #9999ff)"
          bgClip="text"
        >
          <AnimatedText text="I'm Trung Kien" delay={1} />
        </Heading>
        <MotionText
          fontSize={["1rem", "1.2rem"]}
          color="text.primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          A passionate programmer, and future back-end developer from Vietnam.
        </MotionText>
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
          repeatType: "loop"
        }}
      >
        <Icon as={BsChevronDown} w={8} h={8} color="text.primary" />
      </MotionBox>
    </Box>
  );
};

export default Header; 