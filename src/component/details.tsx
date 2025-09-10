import { Container, Title, Text, Button, Grid, GridCol, Card, Group, Box, Flex } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './details.module.css';

export default function ApprodablePackages() {
  return (
    <Container size="xl" py="xl">
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap="xl"
        justify="center"
        align="center"
      >
        <Box mb="xl">
          <Box w={60} h={4} bg="red.5" mb="md" />
          <Title order={1} size="h1" fw={700} c="dark.8" mb="md">
            Approdable Packages
          </Title>
          <Text size="md" c="gray.6" maw={400}>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </Text>
          <Button
            variant="transparent"
            color="green.7"
            rightSection={<IconArrowRight size={16} className={classes.arrow} />}
            p={0}
            mt="md"
            className={classes.learnMoreButton}
          >
            Learn More
          </Button>
        </Box>

        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" h="100%" bg="white">
              <Group mb="md">
                <Box bg="green.7" p="sm" style={{ borderRadius: '8px' }}>
                  <Image 
                    src="/frontend-interview-assets/012-blackboards.svg" 
                    alt="Certified Teacher" 
                    width={32} 
                    height={32}
                  />
                </Box>
              </Group>
              <Title order={3} size="h4" fw={600} c="dark.8" mb="sm">
                Certified Teacher
              </Title>
              <Box w={50} h={2} bg="red.5" mb="md" />
              <Text size="sm" c="gray.6">
                The gradual accumulation of information about
              </Text>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" h="100%" bg="white">
              <Group mb="md">
                <Box bg="green.7" p="sm" style={{ borderRadius: '8px' }}>
                  <Image 
                    src="/frontend-interview-assets/013-telescope-1.svg" 
                    alt="Expert Instruction" 
                    width={32} 
                    height={32}
                  />
                </Box>
              </Group>
              <Title order={3} size="h4" fw={600} c="dark.8" mb="sm">
                Expert Instruction
              </Title>
              <Box w={50} h={2} bg="red.5" mb="md" />
              <Text size="sm" c="gray.6">
                The gradual accumulation of information about
              </Text>
            </Card>
          </GridCol>
        </Grid>
      </Flex>
    </Container>
  );
}