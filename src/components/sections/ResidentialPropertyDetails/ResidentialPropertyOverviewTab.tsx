import { Box, chakra, Flex, Icon, Link } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { PropertyProps } from '../../../types';

const ResidentialPropertyOverviewTab = (props: PropertyProps) => {
  return (
    <Flex
      p={{ base: 0, lg: 8 }}
      gap={4}
      flexDirection="column"
      letterSpacing="wide"
      fontWeight="light"
    >
      <PortableText
        value={props.listing.description}
        components={{
          marks: {
            link: ({ value, children }) => {
              return (
                <Link
                  href={value?.href}
                  target="_blank"
                  rel="noreferrer"
                  position="relative"
                  role="group"
                  overflow="hidden"
                  display="inline-flex"
                  flexDirection="column"
                  w="fit-content"
                >
                  <chakra.span px={0.5} fontWeight="semibold">
                    {children}
                  </chakra.span>
                  <chakra.span
                    display="block"
                    w="200%"
                    mt={-0.5}
                    h={0.5}
                    transform="translateX(-50%)"
                    bgGradient="linear(to-r, brand.500 50%, rgba(0,0,0,0.1) 50%)"
                    transition="200ms ease-in-out"
                    _groupHover={{ transform: 'translateX(0%)' }}
                  />
                </Link>
              );
            },
          },
          block: {
            h1: ({ children }) => (
              <>
                <chakra.h1
                  fontSize="4xl"
                  color="headerText"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {children}
                </chakra.h1>
                <Box h={1} w={64} bg="brand.500" />
              </>
            ),
            h2: ({ children }) => (
              <chakra.h2
                fontSize="2xl"
                color="headerText"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                {children}
              </chakra.h2>
            ),
            h3: ({ children }) => (
              <chakra.h3
                fontSize="xl"
                fontWeight="semibold"
                color="rgba(0,0,0,0.75)"
              >
                {children}
              </chakra.h3>
            ),
            blockquote: ({ children }) => (
              <Box borderLeftWidth={4} borderColor="brand.500" p={4}>
                <chakra.blockquote color="bodyText">
                  {children}
                </chakra.blockquote>
              </Box>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <chakra.ul ml={4} listStyleType="none">
                {children}
              </chakra.ul>
            ),
          },
          listItem: {
            bullet: ({ children }) => (
              <chakra.li
                display="flex"
                alignItems="center"
                gap={2}
                color="bodyText"
              >
                <Icon as={FaChevronRight} w={2.5} h={2.5} color="brand.500" />{' '}
                {children}
              </chakra.li>
            ),
          },
        }}
      />
    </Flex>
  );
};

export default ResidentialPropertyOverviewTab;
