import React from 'react';
import { Box, Text, Container, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      as="footer" 
      py={8} 
      bg="bg.secondary" 
      position="relative"
      overflow="hidden"
      _before={{
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--chakra-colors-brand-primary), transparent)',
      }}
    >
      <Container maxW="container.xl">
        <Flex 
          direction="column" 
          align="center" 
          justify="center"
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MotionText 
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm" 
              color="text.secondary"
              mb={2}
            >
              Built with <Icon as={FaHeart} color="red.400" mx={1} /> using React & Chakra UI
            </MotionText>
            <Text fontSize="sm" color="text.secondary">
              © {currentYear} Trung Kien. 
            </Text>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer; 