import { Box, chakra, Flex, Icon } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { PropertyProps } from '../../../types';

const ResidentialPropertyOverviewTab = (props: PropertyProps) => {
  return (
    <Flex
      p={{ base: 0, lg: 8 }}
      gap={4}
      flexDirection='column'
      letterSpacing='wide'
      fontWeight='light'
    >
      <PortableText
        value={props.listing.description}
        components={{
          block: {
            h1: ({ children }) => (
              <>
                <chakra.h1
                  fontSize='4xl'
                  color='headerText'
                  fontWeight='bold'
                  textTransform='uppercase'
                >
                  {children}
                </chakra.h1>
                <Box h={1} w={64} bg='brand.500' />
              </>
            ),
            h2: ({ children }) => (
              <chakra.h2
                fontSize='2xl'
                color='headerText'
                fontWeight='semibold'
                textTransform='uppercase'
              >
                {children}
              </chakra.h2>
            ),
            h3: ({ children }) => (
              <chakra.h3
                fontSize='xl'
                fontWeight='semibold'
                color='rgba(0,0,0,0.75)'
              >
                {children}
              </chakra.h3>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <chakra.ul ml={4} listStyleType='none'>
                {children}
              </chakra.ul>
            ),
          },
          listItem: {
            bullet: ({ children }) => (
              <chakra.li
                display='flex'
                alignItems='center'
                gap={2}
                color='bodyText'
              >
                <Icon as={FaChevronRight} w={2.5} h={2.5} color='brand.500' />{' '}
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
