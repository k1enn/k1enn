// Create this just in case my projects too long
import React, { useEffect } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects.json";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const ProjectPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <ScrollToTop />

      <Box
        pt="80px" // Account for fixed navbar
        p={["3rem 1rem", "5rem 2rem"]}
        position="relative"
        bg="bg.primary"
        minHeight="100vh"
      >
        <Container maxW="container.lg">
          <MotionHeading
            as="h1"
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
              position: "absolute",
              left: "20%",
              transform: "translateX(-50%)",
              bottom: "-10px",
              width: "60px",
              height: "3px",
              background:
                "linear-gradient(90deg, var(--chakra-colors-brand-primary), #9999ff)",
              borderRadius: "3px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            All Projects
          </MotionHeading>

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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                as={Link}
                to="/"
                variant="ghost"
                size="lg"
                color="blue.400"
                bg="transparent"
                border="1px solid transparent"
                transition="all 0.3s ease"
                _hover={{
                  bg: "rgba(77, 77, 255, 0.1)",
                  boxShadow: "0 0 15px 5px rgba(77, 77, 255, 0.3)",
                  border: "1px solid rgba(77, 77, 255, 0.3)",
                  transform: "translateY(-3px)",
                }}
              >
                Back to Home
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
