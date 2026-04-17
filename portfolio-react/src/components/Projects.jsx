import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./section-heading";
import projectsData from "../projects.json";

const MotionBox = motion(Box);

const Projects = () => {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <Box
      as="section"
      id="projects"
      aria-labelledby="projects-heading"
      p={["3rem 1rem", "5rem 2rem"]}
      position="relative"
      bg="rgba(0, 0, 0, 0.15)"
    >
      <Container maxW="container.lg">
        <SectionHeading id="projects-heading">Projects</SectionHeading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              direction={project.direction}
            />
          ))}
        </SimpleGrid>

        <Flex justifyContent="center" mt={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              as={Link}
              to="/projects"
              size="lg"
              rightIcon={<RiArrowRightLine />}
              color="text.primary"
              bg="transparent"
              border="1px solid"
              borderColor="rgba(77, 77, 255, 0.4)"
              transition="all 0.2s ease"
              _hover={{
                bg: "rgba(77, 77, 255, 0.12)",
                boxShadow: "brandGlow",
                borderColor: "brand.hover",
                transform: "translateY(-2px)",
              }}
              _active={{ transform: "translateY(0)" }}
            >
              View all projects
            </Button>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
