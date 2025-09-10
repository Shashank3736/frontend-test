import React from 'react';
import {
    Container,
    Grid,
    Text,
    Stack,
    Group,
    Anchor,
    Box,
    Image,
    GridCol
} from '@mantine/core';

const Footer = () => {
    const footerSections = [
        {
            title: 'Company Info',
            links: [
                { label: 'About Us', href: '#' },
                { label: 'Carrier', href: '#' },
                { label: 'We are hiring', href: '#' },
                { label: 'Blog', href: '#' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'About Us', href: '#' },
                { label: 'Carrier', href: '#' },
                { label: 'We are hiring', href: '#' },
                { label: 'Blog', href: '#' }
            ]
        },
        {
            title: 'Features',
            links: [
                { label: 'Business Marketing', href: '#' },
                { label: 'User Analytic', href: '#' },
                { label: 'Live Chat', href: '#' },
                { label: 'Unlimited Support', href: '#' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { label: 'IOS & Android', href: '#' },
                { label: 'Watch a Demo', href: '#' },
                { label: 'Customers', href: '#' },
                { label: 'API', href: '#' }
            ]
        }
    ];

    return (
        <Box bg="white" pt={60}>
            <Container>
                <Grid>
                    {/* Footer Links Sections */}
                    {footerSections.map((section, index) => (
                        <GridCol key={index} span={{ base: 12, sm: 6, md: 3, lg: 2.4 }}>
                            <Stack gap="md">
                                <Text fw={700} size="lg" c="darkBlue.9">
                                    {section.title}
                                </Text>
                                <Stack gap="xs">
                                    {section.links.map((link, linkIndex) => (
                                        <Anchor
                                            key={linkIndex}
                                            href={link.href}
                                            c="gray.7"
                                            td="none"
                                            fw={600}
                                            size="sm"
                                            style={{
                                                '&:hover': {
                                                    color: 'var(--mantine-color-darkBlue-9)'
                                                }
                                            }}
                                        >
                                            {link.label}
                                        </Anchor>
                                    ))}
                                </Stack>
                            </Stack>
                        </GridCol>
                    ))}

                    {/* Contact Information */}
                    <GridCol span={{ base: 12, sm: 6, md: 3, lg: 2.4 }}>
                        <Stack gap="md">
                            <Text fw={700} size="lg" c="darkBlue.9">
                                Get In Touch
                            </Text>

                            <Stack gap="sm">
                                {/* Phone */}
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                                    <Box w={20} h={20} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Image
                                            src="/frontend-interview-assets/contact.svg"
                                            alt="Phone"
                                            w={16}
                                            h={16}
                                            fit="contain"
                                        />
                                    </Box>
                                    <Text c="gray.7" fw={600} size="sm" style={{ flex: 1 }}>
                                        (480) 555-0103
                                    </Text>
                                </Box>

                                {/* Address */}
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '12px' }}>
                                    <Box w={20} h={20} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <Image
                                            src="/frontend-interview-assets/location.svg"
                                            alt="Location"
                                            w={16}
                                            h={16}
                                            fit="contain"
                                        />
                                    </Box>
                                    <Text c="gray.7" fw={600} size="sm" style={{ flex: 1 }}>
                                        4517 Washington Ave. Manchester,<br />
                                        Kentucky 39495
                                    </Text>
                                </Box>

                                {/* Email */}
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                                    <Box w={20} h={20} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Image
                                            src="/frontend-interview-assets/email.svg"
                                            alt="Email"
                                            w={16}
                                            h={16}
                                            fit="contain"
                                        />
                                    </Box>
                                    <Text c="gray.7" fw={600} size="sm" style={{ flex: 1 }}>
                                        debra.holt@example.com
                                    </Text>
                                </Box>
                            </Stack>
                        </Stack>
                    </GridCol>
                </Grid>

            </Container>
            {/* Bottom Section */}
            <Box mt={60} py={30} px={30} bg="gray.0">
                <Group justify="space-between" align="center">
                    <Text c="gray.6" fw={600} size="sm">
                        Made With Love By Shreyash Raj All Right Reserved
                    </Text>

                    {/* Social Media Icons */}
                    <Group gap="md">
                        <Anchor href="#" target="_blank">
                            <Image
                                src="/frontend-interview-assets/facebook.svg"
                                alt="Facebook"
                                w={24}
                                h={24}
                            />
                        </Anchor>
                        <Anchor href="#" target="_blank">
                            <Image
                                src="/frontend-interview-assets/instagram.svg"
                                alt="Instagram"
                                w={24}
                                h={24}
                            />
                        </Anchor>
                        <Anchor href="#" target="_blank">
                            <Image
                                src="/frontend-interview-assets/twitter.svg"
                                alt="Twitter"
                                w={24}
                                h={24}
                            />
                        </Anchor>
                    </Group>
                </Group>
            </Box>
        </Box>
    );
};

export default Footer;