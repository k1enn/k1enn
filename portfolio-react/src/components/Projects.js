import React from 'react';
import { Box, Container, SimpleGrid, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const MotionHeading = motion(Heading);

const Projects = () => {
  const projects = [
    {
      title: 'software-engineer-notes',
      description: 'Sharing notes for CS major.',
      image: '/images/software-engineer-note.png',
      link: 'https://github.com/k1enn/software-engineer-notes',
      direction: 'left',
      tags: ['Documentation', 'Educational', 'CS']
    },
    {
      title: 'BoysCoffee',
      description: 'A web application for browsing, selecting, and ordering beverages from anywhere.',
      image: '/images/web_1.png',
      link: 'https://github.com/k1enn/Ca-Phe-Boys',
      direction: 'left',
      tags: ['Web App', 'E-Commerce', 'Fullstack']
    },
    {
      title: 'barbie-thrift-tool',
      description: 'A responsive tool for documenting apparel details with dynamic output generation.',
      image: '/images/barbie-thrift-tools.png',
      link: 'https://github.com/k1enn/Outfit-Template-Maker',
      direction: 'right',
      tags: ['Tool', 'Frontend', 'Responsive']
    },
    {
      title: 'elsa-speak-clone',
      description: 'A comprehensive Android application designed to help users learn English through interactive lessons, pronunciation practice, quizzes, and more.',
      image: '/images/elsa-speak-clone.png',
      link: 'https://github.com/k1enn/elsa-speak-clone',
      direction: 'right',
      tags: ['Mobile', 'Android', 'Education']
    },
  ];

  return (
    <Box id="projects"       p={["3rem 1rem", "5rem 2rem"]}
    position="relative"
    bg="rgba(0, 0, 0, 0.02)">
      <Container maxW="container.xl">
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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} direction={project.direction} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
