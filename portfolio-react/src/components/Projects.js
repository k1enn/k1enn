import React from 'react';
import { Box, Container, SimpleGrid, Heading, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projectsData from '../projects.json';

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const Projects = () => {
  // Only show first 2 projects on homepage
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <Box id="projects" p={["3rem 1rem", "5rem 2rem"]}
    position="relative"
    bg="rgba(0, 0, 0, 0.02)">
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
             position: 'absolute',
             left: '20%',
             transform: 'translateX(-50%)',
             bottom: '-10px',
             width: '60px',
             height: '3px',
             background: 'linear-gradient(90deg, var(--chakra-colors-brand-primary), #9999ff)',
             borderRadius: '3px',
           }}
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          Projects
        </MotionHeading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} direction={project.direction} />
          ))}
        </SimpleGrid>
        
        <Flex justifyContent="center" mt={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              as={Link}
              to="/projects"
              variant="custom"
              size="lg"
              _hover={{
                transform: "translateY(-3px)",
                boxShadow: "0 6px 20px rgba(77, 77, 255, 0.4)",
              }}
            >
              View All Projects
            </Button>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
