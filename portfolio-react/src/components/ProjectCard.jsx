import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

const MotionBox = motion(Box);

const ProjectCard = ({ project, index = 0 }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      h="100%"
      role="group"
      as="a"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — open on GitHub (new tab)`}
      _focusVisible={{ outline: "none" }}
    >
      <Box
        bg="ink.white"
        border="2px solid"
        borderColor="ink.black"
        boxShadow="brutal"
        h="100%"
        display="flex"
        flexDirection="column"
        transition="transform 0.12s ease-out, box-shadow 0.12s ease-out, background 0.12s ease-out, color 0.12s ease-out"
        _hover={{
          transform: "translate(-4px, -4px)",
          boxShadow: "brutalLg",
          bg: "ink.black",
          color: "ink.white",
        }}
        _groupFocus={{
          boxShadow: "brutalLg",
        }}
        sx={{
          "&:hover .project-thumb": {
            filter: "invert(1) grayscale(1) contrast(1.05)",
          },
          "&:hover .project-tag": {
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
          },
          "&:hover .project-meta": {
            borderColor: "#FFFFFF",
          },
          "&:hover .project-arrow": {
            bg: "#FFFFFF",
            color: "#000000",
          },
        }}
      >
        <Box
          position="relative"
          width="100%"
          pt="56.25%"
          overflow="hidden"
          borderBottom="2px solid"
          borderColor="ink.black"
          bg="ink.100"
        >
          <Image
            className="project-thumb"
            src={project.image}
            alt={project.title ? `${project.title} preview` : ""}
            loading="lazy"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="filter 0.15s ease-out, transform 0.4s ease-out"
            sx={{ filter: "grayscale(1) contrast(1.05)" }}
            _groupHover={{ transform: "scale(1.03)" }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            className="project-meta"
            bg="ink.white"
            color="ink.black"
            borderRight="2px solid"
            borderBottom="2px solid"
            borderColor="ink.black"
            px={3}
            py={1}
            fontFamily="mono"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            {number}
          </Box>
        </Box>

        <VStack spacing={3} align="stretch" p={[4, 5]} flex="1">
          <Flex justify="space-between" align="flex-start" gap={3}>
            <Heading
              as="h3"
              fontFamily="display"
              fontSize={["xl", "2xl"]}
              lineHeight="1"
              letterSpacing="-0.02em"
              textTransform="uppercase"
              wordBreak="break-word"
            >
              {project.title}
            </Heading>
            <Flex
              className="project-arrow"
              w="40px"
              h="40px"
              minW="40px"
              align="center"
              justify="center"
              border="2px solid currentColor"
              transition="background 0.12s ease-out, color 0.12s ease-out"
            >
              <Box as={RiArrowRightUpLine} fontSize="22px" />
            </Flex>
          </Flex>

          {project.tags && project.tags.length > 0 && (
            <HStack spacing={2} flexWrap="wrap">
              {project.tags.map((tag, idx) => (
                <Text
                  key={idx}
                  className="project-tag"
                  as="span"
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight="500"
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                  border="2px solid"
                  borderColor="currentColor"
                  px={2}
                  py={1}
                  mb={1}
                >
                  {tag}
                </Text>
              ))}
            </HStack>
          )}

          <Text fontSize={["sm", "md"]} lineHeight="1.5">
            {project.description}
          </Text>

          {(project.year || project.stack) && (
            <Flex
              mt="auto"
              pt={3}
              borderTop="2px solid"
              borderColor="currentColor"
              justify="space-between"
              fontFamily="mono"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              {project.year && <Text>{project.year}</Text>}
              {project.stack && <Text>{project.stack}</Text>}
            </Flex>
          )}
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard;
