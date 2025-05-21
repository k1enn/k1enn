import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

const MotionText = motion(Text);

const AnimatedText = ({ text, delay = 0, ...props }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }));
  }, [controls, delay]);

  // Split text into individual characters
  const letters = text.split('');

  return (
    <Text as="span" display="inline-block" {...props}>
      {letters.map((char, i) => (
        <MotionText
          as="span"
          key={i}
          display="inline-block"
          initial={{ opacity: 0, y: 25 }}
          custom={i}
          animate={controls}
          whileHover={{ 
            scale: 1.2, 
            color: 'var(--chakra-colors-brand-primary)',
            transition: { duration: 0.2 } 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </MotionText>
      ))}
    </Text>
  );
};

export default AnimatedText; 