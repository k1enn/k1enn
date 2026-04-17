import React, { useEffect } from "react";
import { Box, Container, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/section-heading";
import projectsData from "../projects.json";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";

const MotionBox = motion(Box);

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bg="ink.white" color="ink.black" minH="100vh">
      <Navbar />
      <ScrollToTop />

      <Box
        as="main"
        pt={["96px", "120px"]}
        pb={["4rem", "6rem"]}
        px={["1.25rem", "2rem"]}
      >
        <Container maxW="1280px" p={0}>
          <SectionHeading as="h1" id="all-projects-heading">
            All Projects
          </SectionHeading>

          <Flex mb={8} flexWrap="wrap" gap={3}>
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.1em"
            >
              Count: {String(projectsData.length).padStart(2, "0")}
            </Text>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[6, 8]}>
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </SimpleGrid>

          <Flex justify="center" mt={[10, 14]}>
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Box
                as={Link}
                to="/"
                display="inline-flex"
                alignItems="center"
                gap={3}
                bg="ink.white"
                color="ink.black"
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
                  bg: "ink.black",
                  color: "ink.white",
                  transform: "translate(-3px, -3px)",
                  boxShadow: "brutalLg",
                }}
                _active={{
                  transform: "translate(2px, 2px)",
                  boxShadow: "none",
                }}
              >
                <Box as={RiArrowLeftLine} />
                Back home
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProjectPage;
