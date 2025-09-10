import React from 'react';
import { Container, Title, Text, Button, Image, Flex, Stack, Box } from '@mantine/core';

const Hero = () => {
  return (
    <Box bg="cream.2" py="1rem">
      <Container size="xl">
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap="xl"
          justify="center"
          align="center"
        >
          <Stack gap="lg" w={{ base: '100%', sm: '50%' }} ta={{ base: 'center', sm: 'left' }}>
            <Text c="green.7" size="sm" fw={500}>
              Welcome
            </Text>
            <Title order={1} c="darkBlue.9" ta={{ base: 'center', sm: 'left' }}>
              Best Learning Opportunities
            </Title>
            <Text size="lg" c="gray.9" ta={{ base: 'center', sm: 'left' }}>
              Our goal is to make online <br /> education work for everyone
            </Text>
            <Flex justify={{ base: 'center', sm: 'start' }} gap="md">
              <Button variant="filled" color="green.7">
                Get Started
              </Button>
              <Button variant="outline" color="green.7">
                Learn More
              </Button>
            </Flex>
          </Stack>
          <Image
            src="/frontend-interview-assets/hero-cover-1.png"
            w={{ base: '100%', sm: '50%' }}
            h={{ base: 'auto', sm: 400 }}
            fit="contain"
            alt="Hero image"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;