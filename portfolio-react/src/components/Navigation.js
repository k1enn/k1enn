import React, { useState, useEffect } from 'react';
import { Box, VStack, Tooltip, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('header');
  
  const sections = [
    { id: 'header', label: 'Home' },
    { id: 'connect', label: 'Connect' },
    { id: 'projects', label: 'Projects' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };
  
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <VStack
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      position="fixed"
      right="20px"
      top="50%"
      transform="translateY(-50%)"
      spacing="15px"
      zIndex="100"
      display={['none', null, 'flex']} // Hide on mobile
    >
      {sections.map((section) => (
        <Tooltip key={section.id} label={section.label} placement="left" hasArrow>
          <MotionBox
            variants={dotVariants}
            onClick={() => scrollToSection(section.id)}
            width="12px"
            height="12px"
            borderRadius="50%"
            position="relative"
            cursor="pointer"
            _before={activeSection === section.id ? {
              content: "''",
              position: 'absolute',
              top: '-4px',
              left: '-4px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '1px solid var(--chakra-colors-brand-primary)',
              opacity: 0.5
            } : {}}
            bg={activeSection === section.id ? "brand.primary" : "rgba(255, 255, 255, 0.3)"}
            transition="all 0.3s ease"
            animate={{ 
              scale: activeSection === section.id ? 1 : 0.8,
              backgroundColor: activeSection === section.id 
                ? 'var(--chakra-colors-brand-primary)' 
                : 'rgba(255, 255, 255, 0.3)'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </Tooltip>
      ))}
    </VStack>
  );
};

export default Navigation; 