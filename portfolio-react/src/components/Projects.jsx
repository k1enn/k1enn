import React from "react";
import { Box, Container, SimpleGrid, Flex, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./section-heading";
import projectsData from "../projects.json";

const MotionBox = motion(Box);

const Projects = () => {
  const featured = projectsData.slice(0, 4);
  const totalCount = projectsData.length;

  return (
    <Box
      as="section"
      id="projects"
      aria-labelledby="projects-heading"
      py={["4rem", "6rem"]}
      px={["1.25rem", "2rem"]}
      bg="ink.white"
      borderTop="2px solid"
      borderColor="ink.black"
    >
      <Container maxW="1280px" p={0}>
        <SectionHeading id="projects-heading" index={3}>
          Projects
        </SectionHeading>

        <Flex
          justify="space-between"
          align="center"
          mb={8}
          flexWrap="wrap"
          gap={3}
        >
          <Text
            fontFamily="mono"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="0.1em"
          >
            Showing {featured.length} of {totalCount}
          </Text>
          <HStack spacing={2}>
            <Box w="10px" h="10px" bg="ink.black" />
            <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em">
              Selected Work
            </Text>
          </HStack>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[6, 8]}>
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={[10, 14]}>
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Box
              as={Link}
              to="/projects"
              display="inline-flex"
              alignItems="center"
              gap={3}
              bg="ink.black"
              color="ink.white"
              border="2px solid"
              borderColor="ink.black"
              boxShadow="brutal"
              px={[5, 7]}
              py={[3, 4]}
              fontFamily="mono"
              fontSize={["sm", "md"]}
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0.1em"
              transition="all 0.12s ease-out"
              _hover={{
                bg: "ink.white",
                color: "ink.black",
                transform: "translate(-3px, -3px)",
                boxShadow: "brutalLg",
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: "none",
              }}
            >
              View all projects
              <Box as={RiArrowRightLine} />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
