import { Box, chakra, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Button, Input, Location, Textarea } from '../src/components';
import { InnerPageLayout, InnerPageLayoutProps } from '../src/layouts';

const ContactPage: NextPage = () => {
  const props: InnerPageLayoutProps = {
    imgSrc:
      'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    imgAlt: '',
    title: 'Contact Us',
    subtitle: 'Id ea eu aliquip amet do ipsum',
  };

  return (
    <InnerPageLayout {...props}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        w="full"
        maxW="7xl"
        mx="auto"
        gap={16}
        mb={16}
      >
        <Box p={4}>
          <chakra.h2
            textStyle="h2"
            color="headerText"
            mb={16}
            textAlign="left"
            fontSize="4xl"
          >
            Send a message
          </chakra.h2>
          <Stack spacing={8}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Input label="First name" autoComplete="given-name" />
              <Input label="Last name" autoComplete="family-name" />
            </SimpleGrid>
            <Input label="Phone number" autoComplete="tel" />
            <Input label="Email" autoComplete="email" />
            <Textarea label="Message" />
            <Button ariaLabel="Send the message">Send</Button>
          </Stack>
        </Box>
        <Box p={4}>
          <chakra.h2
            textStyle="h2"
            color="headerText"
            mb={16}
            textAlign="left"
            fontSize="4xl"
          >
            Contact info
          </chakra.h2>
          <Stack spacing={8}>
            <Box>
              <chakra.h3
                fontSize="xl"
                fontWeight="semibold"
                color="headerText"
                letterSpacing={1}
              >
                Talk to us
              </chakra.h3>
              <Text>lorem@ipsum.com</Text>
              <Text>(419) 555-5555</Text>
            </Box>
            <Box>
              <chakra.h3
                fontSize="xl"
                fontWeight="semibold"
                color="headerText"
                letterSpacing={1}
              >
                Visit us
              </chakra.h3>
              <chakra.address>
                <Text>123 Main St.</Text>
                <Text>Toledo, OH 43604</Text>
              </chakra.address>
            </Box>
          </Stack>
        </Box>
      </SimpleGrid>
      <Location />
    </InnerPageLayout>
  );
};
export default ContactPage;
