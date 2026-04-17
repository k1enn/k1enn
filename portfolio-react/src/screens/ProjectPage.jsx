// Create this just in case my projects too long
import React, { useEffect } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
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
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Navbar />
      <ScrollToTop />

      <Box
        as="main"
        pt="80px"
        p={["3rem 1rem", "5rem 2rem"]}
        position="relative"
        bg="bg.primary"
        minHeight="100vh"
      >
        <Container maxW="container.lg">
          <SectionHeading as="h1" id="all-projects-heading">
            All Projects
          </SectionHeading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </SimpleGrid>

          <Flex justifyContent="center" mt={12}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                as={Link}
                to="/"
                size="lg"
                leftIcon={<RiArrowLeftLine aria-hidden="true" />}
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
                Back to home
              </Button>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProjectPage;
