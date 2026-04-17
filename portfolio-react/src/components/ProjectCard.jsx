import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Tag,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiExternalLinkLine } from "react-icons/ri";
const MotionBox = motion(Box);

const ProjectCard = ({ project, direction }) => {
  const animationDirection = direction === "left" ? -40 : 40;
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <MotionBox
      initial={{ opacity: 0, x: animationDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      h="100%"
      role="group"
    >
      <Box
        bg="bg.card"
        backdropFilter="blur(10px)"
        borderRadius="card"
        overflow="hidden"
        borderWidth="1px"
        borderColor="rgba(255, 255, 255, 0.06)"
        h="100%"
        boxShadow="soft"
        transition="transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"
        _hover={{
          transform: "translateY(-6px)",
          boxShadow: "lift",
          borderColor: "rgba(77, 77, 255, 0.35)",
        }}
        _focusWithin={{
          borderColor: "brand.hover",
          boxShadow: "focus",
        }}
        position="relative"
      >
        <Box position="relative" width="100%" pt="56.25%" overflow="hidden">
          <Image
            src={project.image}
            alt={project.title ? `${project.title} preview` : ""}
            loading="lazy"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.5s ease"
            _groupHover={{ transform: "scale(1.04)" }}
          />
        </Box>
        <VStack spacing={3} align="flex-start" p={5}>
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
                  bg="rgba(77, 77, 255, 0.15)"
                  color="brand.accent"
                  borderRadius="full"
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
            variant="outline"
            size={buttonSize}
            as="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} (opens in new tab)`}
            rightIcon={<RiArrowRightLine aria-hidden="true" />}
            leftIcon={<RiExternalLinkLine aria-hidden="true" />}
            mt={2}
            color="text.primary"
            borderColor="rgba(255,255,255,0.15)"
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "brandGlow",
              color: "white",
              bg: "brand.primary",
              borderColor: "brand.primary",
            }}
            _active={{ transform: "translateY(0)" }}
          >
            View project
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard;
