import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Icon, VStack, HStack, Flex, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Header = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const startDate = new Date("August 1, 2023").getTime();
    const endDate = new Date("August 1, 2027").getTime();
    const currentDate = new Date().getTime();
    const total = endDate - startDate;
    const elapsed = currentDate - startDate;
    const progress = Math.min(Math.max((elapsed / total) * 100, 0), 100);

    const delay = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        if (current >= progress) {
          clearInterval(interval);
        } else {
          current += 1;
          setProgressValue(current);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Box
      id="header"
      as="header"
      role="banner"
      minH={["100vh", "100dvh"]}
      bg="ink.white"
      color="ink.black"
      pt={["96px", "120px"]}
      pb={["4rem", "6rem"]}
      position="relative"
      borderBottom="2px solid"
      borderColor="ink.black"
    >
      <Container maxW="1280px" px={["1.25rem", "2rem"]}>
        <HStack spacing={3} mb={8}>
          <Box w="12px" h="12px" bg="ink.black" />
          <Text
            fontFamily="mono"
            fontSize="sm"
            letterSpacing="0.15em"
            textTransform="uppercase"
          >
            VN / Back-End Dev / 2026
          </Text>
        </HStack>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Heading
            as="h1"
            fontFamily="display"
            fontSize={["4rem", "6rem", "8rem", "10rem"]}
            lineHeight="0.88"
            letterSpacing="-0.06em"
            textTransform="uppercase"
            mb={[4, 6]}
          >
            Trung
            <Box as="br" />
            Kien
            <Box
              as="span"
              display="inline-block"
              w={["12px", "18px"]}
              h={["12px", "18px"]}
              bg="ink.black"
              ml={2}
              verticalAlign="middle"
            />
          </Heading>
        </MotionBox>

        <Flex
          direction={["column", "column", "row"]}
          gap={[6, 8]}
          mt={[6, 10]}
          align={["flex-start", null, "flex-end"]}
          justify="space-between"
        >
          <MotionText
            fontSize={["1.1rem", "1.35rem"]}
            maxW="560px"
            lineHeight="1.4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Passionate programmer building <Box as="span" bg="ink.black" color="ink.white" px={1}>server-side</Box> systems from Vietnam. Learning out loud, shipping small.
          </MotionText>

          <MotionBox
            w={["100%", null, "320px"]}
            border="2px solid"
            borderColor="ink.black"
            bg="ink.white"
            boxShadow="brutal"
            p={4}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <VStack spacing={2} align="stretch">
              <Flex justify="space-between" align="baseline">
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  Road to Graduation
                </Text>
                <Text fontFamily="mono" fontSize="sm" fontWeight="700">
                  {progressValue.toFixed(0)}%
                </Text>
              </Flex>
              <Box
                w="100%"
                h="18px"
                border="2px solid"
                borderColor="ink.black"
                bg="ink.white"
                position="relative"
                overflow="hidden"
              >
                <MotionBox
                  bg="ink.black"
                  h="100%"
                  animate={{ width: `${progressValue}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </Box>
              <Flex
                justify="space-between"
                fontFamily="mono"
                fontSize="xs"
                color="ink.500"
              >
                <Text>2023.08</Text>
                <Text>2027.08</Text>
              </Flex>
            </VStack>
          </MotionBox>
        </Flex>

        <MotionBox
          mt={[10, 16]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 0.8, duration: 1.6, repeat: Infinity }}
        >
          <HStack
            as="button"
            type="button"
            spacing={2}
            border="2px solid"
            borderColor="ink.black"
            bg="ink.white"
            px={4}
            py={2}
            cursor="pointer"
            transition="all 0.12s ease-out"
            _hover={{ bg: "ink.black", color: "ink.white" }}
            onClick={() => {
              const tech = document.getElementById("technology");
              if (tech) tech.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label="Scroll to next section"
          >
            <Text
              fontFamily="mono"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.1em"
              fontWeight="700"
            >
              Scroll
            </Text>
            <Icon as={BsArrowDownShort} w={5} h={5} />
          </HStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Header;
