import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useReducedMotion } from "framer-motion";
import {
  SiDart,
  SiHtml5,
  SiJavascript,
  SiFlutter,
  SiAndroid,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import SectionHeading from "./section-heading";

const TECHNOLOGIES = [
  { name: "C#", icon: TbBrandCSharp },
  { name: "Java", icon: FaJava },
  { name: "Dart", icon: SiDart },
  { name: "HTML", icon: SiHtml5 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Flutter", icon: SiFlutter },
  { name: "Android", icon: SiAndroid },
  { name: ".NET Framework", icon: SiDotnet },
  { name: ".NET Core", icon: SiDotnet },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "ReactJS", icon: SiReact },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL Server", icon: DiMsqlServer },
  { name: "Firebase", icon: SiFirebase },
];

const Technology = () => {
  const looped = [...TECHNOLOGIES, ...TECHNOLOGIES];
  const scrollRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    let id;
    const step = () => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [paused, prefersReducedMotion]);

  return (
    <Box
      as="section"
      id="technology"
      aria-labelledby="technology-heading"
      py={["4rem", "6rem"]}
      px={["1.25rem", "2rem"]}
      bg="ink.100"
      borderTop="2px solid"
      borderColor="ink.black"
    >
      <Container maxW="1280px" p={0}>
        <SectionHeading id="technology-heading" index={1}>
          Stack
        </SectionHeading>

        <Box
          mt={8}
          border="2px solid"
          borderColor="ink.black"
          bg="ink.white"
          boxShadow="brutal"
          position="relative"
          overflow="hidden"
        >
          <Flex
            ref={scrollRef}
            overflowX="auto"
            py={0}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setTimeout(() => setPaused(false), 2000)}
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {looped.map((tech, index) => (
              <Flex
                key={index}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                minW={["120px", "140px"]}
                h={["120px", "140px"]}
                borderRight="2px solid"
                borderColor="ink.black"
                bg="ink.white"
                color="ink.black"
                transition="all 0.12s ease-out"
                _hover={{
                  bg: "ink.black",
                  color: "ink.white",
                }}
              >
                <Box as={tech.icon} fontSize={["36px", "44px"]} mb={3} aria-hidden="true" />
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight="700"
                  textAlign="center"
                  textTransform="uppercase"
                  letterSpacing="0.06em"
                  px={2}
                >
                  {tech.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Text
          mt={4}
          fontFamily="mono"
          fontSize="xs"
          color="ink.500"
          textTransform="uppercase"
          letterSpacing="0.12em"
        >
          // hover or tap to pause · auto-scrolls
        </Text>
      </Container>
    </Box>
  );
};

export default Technology;
