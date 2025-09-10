"use client"

import React, { useState } from 'react';
import { Container, Text, TextInput, Button, Stack, Group, Box } from '@mantine/core';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        setError('');

        if (!email.trim()) {
            setError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Newsletter subscription:', email);
            setEmail('');
            setIsSubmitting(false);
            // You can add success notification here
        }, 1000);
    };

    return (
        <Box bg="cream.1">
            <Container size="md" py={80}>
                <Stack align="center" gap="md">
                    <Text
                        size="sm"
                        c="green.7"
                        tt="uppercase"
                        fw={500}
                        ta="center"
                    >
                        Newsletter
                    </Text>

                    <Text
                        size="xl"
                        fw={700}
                        c="darkBlue.9"
                        ta="center"
                    >
                        Watch our Courses
                    </Text>

                    <Text
                        size="sm"
                        c="gray.9"
                        ta="center"
                        maw={400}
                    >
                        Problems trying to resolve the conflict between
                        <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </Text>

                    <Group gap="xs" mt="lg" w="100%" maw={400}>
                        <TextInput
                            placeholder="Your Email"
                            value={email}
                            onChange={(event) => setEmail(event.currentTarget.value)}
                            error={error}
                            flex={1}
                            size="md"
                            styles={{
                                input: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e9ecef',
                                }
                            }}
                        />
                        <Button
                            onClick={handleSubmit}
                            loading={isSubmitting}
                            bg="green.7"
                            size="md"
                            px="xl"
                            styles={{
                                root: {
                                    '&:hover': {
                                        backgroundColor: 'var(--mantine-color-green-8)',
                                    }
                                }
                            }}
                        >
                            Subscribe
                        </Button>
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
};

export default Newsletter;