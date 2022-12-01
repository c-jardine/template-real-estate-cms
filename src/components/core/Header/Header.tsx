import { Box, chakra, Flex, Text } from '@chakra-ui/react';
import { HeaderProps } from './Header.types';

const Header = (props: HeaderProps) => {
  return (
    <Box position="relative" maxW="8xl" w="full" mx="auto">
      <Flex
        display={props.center ? 'flex' : 'none'}
        justifyContent="center"
        color="brand.500"
        mb={1}
      >
        <Box h={1} w={32} mb={2} bg="brand.500" mx={props.center && 'auto'} />
      </Flex>
      <chakra.h2
        textAlign={!props.center ? 'left' : 'center'}
        color={(props.light && 'white') || 'headerText'}
        textTransform="uppercase"
        letterSpacing="widest"
        fontSize="3xl"
        fontWeight="bold"
        mb={props.center && 1}
      >
        {props.title}
      </chakra.h2>
      <Text
        lineHeight="shorter"
        letterSpacing="wider"
        textTransform="uppercase"
        mb={4}
        color="subtleText !important"
        textAlign={!props.center ? 'left' : 'center'}
      >
        {props.subtitle}
      </Text>
      <Box h={1} w={32} bg="brand.500" mx={props.center && 'auto'} />
      <Text maxW="4xl" mx="auto" textAlign={!props.center ? 'left' : 'center'}>
        {props.description}
      </Text>
    </Box>
  );
};

export default Header;
