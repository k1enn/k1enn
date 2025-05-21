import React from 'react';
import { Box, Image, Heading, Text, Button, VStack, HStack, Tag, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectCard = ({ project, direction }) => {
  const animationDirection = direction === 'left' ? -50 : 50;
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  
  return (
    <MotionBox
      initial={{ opacity: 0, x: animationDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      h="100%"
    >
      <Box
        bg="rgba(37, 37, 37, 0.7)"
        backdropFilter="blur(10px)"
        borderRadius="10px"
        overflow="hidden"
        borderWidth="1px"
        borderColor="rgba(255, 255, 255, 0.05)"
        h="100%"
        boxShadow="0 5px 15px rgba(0, 0, 0, 0.2)"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "translateY(-10px)",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
        }}
        position="relative"
      >
        <Box position="relative" width="100%" pt="56.25%" overflow="hidden">
          <Image
            src={project.image}
            alt={project.title}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.5s ease"
            _groupHover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <VStack
          spacing={3}
          align="flex-start"
          p={5}
        >
          <Heading
            as="h3"
            fontSize={["xl", "2xl"]}
            letterSpacing="-0.02em"
            color="text.primary"
          >
            {project.title}
          </Heading>
          
          {project.tags && (
            <HStack spacing={2} flexWrap="wrap" mt={1}>
              {project.tags.map((tag, idx) => (
                <Tag 
                  key={idx} 
                  size="md" 
                  colorScheme="blue" 
                  variant="subtle"
                  mb={1}
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
          )}
          
          <Text color="text.secondary" fontSize={["sm", "md"]}>
            {project.description}
          </Text>
          <Button
            variant="custom"
            size={buttonSize}
            as="a"
            href={project.link}
            target="_blank"
            mt={2}
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "0 6px 20px rgba(77, 77, 255, 0.4)",
            }}
          >
            View Project
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard; 