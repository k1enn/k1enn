import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Technology = () => {
    return (
        <Box id="technology" py={10}>
            <MotionHeading as="h2" size="2xl" textAlign="center" mb={10}>
                Technologies I've Used
            </MotionHeading>
        </Box>
    );  
};

export default Technology;