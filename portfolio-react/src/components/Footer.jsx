import React from "react";
import { Box, Text, Container, Flex, HStack } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="ink.black"
      color="ink.white"
      borderTop="2px solid"
      borderColor="ink.black"
      py={[8, 10]}
      px={["1.25rem", "2rem"]}
    >
      <Container maxW="1280px" p={0}>
        <Flex
          direction={["column", null, "row"]}
          align={["flex-start", null, "center"]}
          justify="space-between"
          gap={4}
        >
          <HStack spacing={3}>
            <Box w="14px" h="14px" bg="ink.white" />
            <Text
              fontFamily="display"
              fontSize={["xl", "2xl"]}
              textTransform="uppercase"
              letterSpacing="-0.02em"
            >
              K1EN / TRUNG KIEN
            </Text>
          </HStack>

          <HStack spacing={6} fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em">
            <Text>© {currentYear}</Text>
            <Text>Built with React</Text>
            <Text>Hanoi, VN</Text>
          </HStack>
        </Flex>

        <Box mt={6} borderTop="2px solid" borderColor="ink.white" pt={4}>
          <Text fontFamily="mono" fontSize="xs" color="ink.300" letterSpacing="0.08em">
            // No frameworks harmed in the making of this site.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
