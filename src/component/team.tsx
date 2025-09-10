"use client"

import React from 'react';
import { Container, Title, Text, SimpleGrid, Card, Image, Group, ActionIcon, Box } from '@mantine/core';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Julian Jameson',
            profession: 'Profession',
            image: '/frontend-interview-assets/user-cover-1.png',
        },
        {
            id: 2,
            name: 'Julian Jameson',
            profession: 'Profession',
            image: '/frontend-interview-assets/user-cover-2.png',
        },
        {
            id: 3,
            name: 'Julian Jameson',
            profession: 'Profession',
            image: '/frontend-interview-assets/user-cover-3.png',
        },
        {
            id: 4,
            name: 'Julian Jameson',
            profession: 'Profession',
            image: '/frontend-interview-assets/user-cover-4.png',
        },
    ];

    return (
        <Container size="lg" py={80}>
            <Box>
                <Text size="sm" c="gray.8" fw="bold" mb={8}>
                    Team
                </Text>
                <Title order={2} size="h1" mb={16} c="darkBlue.9">
                    Get Quality Education
                </Title>
                <Text c="gray.6">
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics
                </Text>
            </Box>

            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 4 }}
                spacing={30}
                mt={60}
            >
                {teamMembers.map((member) => (
                    <Card
                        key={member.id}
                        padding={0}
                        radius="md"
                        shadow="sm"
                        bg="white"
                        style={{
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        <Box style={{ overflow: 'hidden' }}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                height={230}
                                fit="cover"
                            />
                        </Box>
                        <Box p="lg">
                            <Title order={5} ta="center" mb={8} c="darkBlue.9">
                                {member.name}
                            </Title>
                            <Text size="sm" c="gray.6" ta="center" mb={16}>
                                {member.profession}
                            </Text>
                            <Group justify="center" gap={8}>
                                <ActionIcon
                                    variant="subtle"
                                    size="lg"
                                    c="green.7"
                                    style={{
                                        transition: 'color 0.2s ease',
                                        height: '32px',
                                        width: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--mantine-color-green-8)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '';
                                    }}
                                >
                                    <Image
                                        src="/frontend-interview-assets/facebook.svg"
                                        alt="Facebook"
                                        width={16}
                                        height={16}
                                        fit="contain"
                                        style={{ display: 'block' }}
                                    />
                                </ActionIcon>
                                <ActionIcon
                                    variant="subtle"
                                    size="lg"
                                    c="green.7"
                                    style={{
                                        transition: 'color 0.2s ease',
                                        height: '32px',
                                        width: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--mantine-color-green-8)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '';
                                    }}
                                >
                                    <Image
                                        src="/frontend-interview-assets/instagram.svg"
                                        alt="Instagram"
                                        width={16}
                                        height={16}
                                        fit="contain"
                                        style={{ display: 'block' }}
                                    />
                                </ActionIcon>
                                <ActionIcon
                                    variant="subtle"
                                    size="lg"
                                    c="green.7"
                                    style={{
                                        transition: 'color 0.2s ease',
                                        height: '32px',
                                        width: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--mantine-color-green-8)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '';
                                    }}
                                >
                                    <Image
                                        src="/frontend-interview-assets/twitter.svg"
                                        alt="Twitter"
                                        width={16}
                                        height={16}
                                        fit="contain"
                                        style={{ display: 'block' }}
                                    />
                                </ActionIcon>
                            </Group>
                        </Box>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Team;