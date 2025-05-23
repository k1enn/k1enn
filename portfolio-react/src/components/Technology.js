import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Flex, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  SiDart,
  SiHtml5,
  SiJavascript,
  SiCss3,
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
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Technology = () => {
  // Change this data if wanna update
  const technologies = [
    { name: "C#", icon: TbBrandCSharp, color: "#67217A" },
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    { name: ".NET Framework", icon: SiDotnet, color: "#512BD4" },
    { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
    { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#E65100" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ];

  // Create a duplicated array for infinite loop effect
  const loopedTechnologies = [...technologies, ...technologies];

  const scrollRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(1);

  // Calculate scroll amount based on device width
  useEffect(() => {
    const calculateScroll = () => {
      const deviceWidth = window.innerWidth;
      const containerWidth = Math.min(deviceWidth * 0.85, 1200);
      const itemWidth = 150 + 4;

      let visibleItems;
      if (deviceWidth < 480) {
        visibleItems = 1;
      } else if (deviceWidth < 768) {
        visibleItems = 2;
      } else {
        visibleItems = Math.floor(containerWidth / itemWidth) || 3;
      }

      setScrollAmount(visibleItems * itemWidth);
    };

    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, []);

  // Reset scroll position when reaching the end
  useEffect(() => {
    const handleInfiniteScroll = () => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const halfwayPoint = scrollWidth / 2;

      // If we've scrolled past the first set of items, reset to beginning
      if (scrollDirection === -1 && scrollLeft < 100) {
        scrollRef.current.scrollLeft = halfwayPoint - 100;
      }

      // If we've scrolled past the second set of items, reset to halfway point
      if (scrollDirection === 1 && scrollLeft > halfwayPoint - 100) {
        scrollRef.current.scrollLeft = 100;
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleInfiniteScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleInfiniteScroll);
      }
    };
  }, [scrollDirection]);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;

    let animationId;
    const autoScrollSpeed = 0.5; // pixels per frame - lower is slower

    const doScroll = () => {
      if (scrollRef.current) {
        // Check if we need to change direction
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Change direction when reaching either end
        if (scrollLeft <= 0) {
          setScrollDirection(1); // scroll right
        } else if (scrollLeft + clientWidth >= scrollWidth - 5) {
          setScrollDirection(-1); // scroll left
        }

        // Perform the scroll
        scrollRef.current.scrollLeft += autoScrollSpeed * scrollDirection;
      }

      animationId = requestAnimationFrame(doScroll);
    };

    animationId = requestAnimationFrame(doScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [autoScroll, scrollDirection]);

  return (
    <Box id="technology" p={["3rem 1rem", "5rem 2rem"]} position="relative">
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technologies
        </MotionHeading>

        <Flex position="relative" w="100%" align="center" mt={10}>
          {/* Auto-scrolling container */}
          <Flex
            ref={scrollRef}
            overflowX="auto"
            py={4}
            px={2}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
            onTouchStart={() => setAutoScroll(false)}
            onTouchEnd={() => setTimeout(() => setAutoScroll(true), 5000)}
          >
            {loopedTechnologies.map((tech, index) => (
              <MotionBox
                key={index}
                minW="100px"
                mx={2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.1,
                  delay: Math.min(index, 16) * 0.015,
                }}
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  bg="rgba(18, 18, 18, 0.6)"
                  borderRadius="lg"
                  p={4}
                  height="150px"
                  _hover={{
                    transform: "translateY(-5px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    as={tech.icon}
                    size="50px"
                    color={tech.color}
                    mb={4}
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.2)" }}
                  />
                  <Text fontWeight="500" textAlign="center">
                    {tech.name}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Technology;
