import React from 'react'
import { Anchor, Box, Button, Container, Group, Text } from '@mantine/core';

const RightArrow = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
  </svg>
);
const Navbar = () => {

  return (
    <Box bg={"cream.2"}>
      <Container size="md" py="md">
        <Group justify="space-between" align="center">
          <Text size="lg" fw={700} c="darkBlue.9">Brandname</Text>
          <Group gap="xl">
            <Anchor href="#" c="gray.9" size="sm" style={{ textDecoration: 'none', fontWeight: "bold" }}>Home</Anchor>
            <Anchor href="#" c="gray.9" size="sm" style={{ textDecoration: 'none', fontWeight: "bold" }}>Product</Anchor>
            <Anchor href="#" c="gray.9" size="sm" style={{ textDecoration: 'none', fontWeight: "bold" }}>Pricing</Anchor>
            <Anchor href="#" c="gray.9" size="sm" style={{ textDecoration: 'none', fontWeight: "bold" }}>Contact</Anchor>
          </Group>
          <Group>
            <Button variant="transparent" color="green.7">Login</Button>
            <Button color="green.7" rightSection={<RightArrow />}>JOIN US</Button>
          </Group>
        </Group>
      </Container>
    </Box>
  )
}

export default Navbar