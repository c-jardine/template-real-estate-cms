import {
  Box,
  BoxProps,
  chakra,
  Flex,
  Link,
} from '@chakra-ui/react';
import React from 'react';

const Button = (props: {
  variant?: 'light' | 'dark';
  href?: string;
  ariaLabel: string;
  children: string | React.ReactNode;
  style?: BoxProps;
}) => {
  return (
    <Box
      aria-label={props.ariaLabel}
      as={Link}
      href={props.href}
      h={12}
      shadow='md'
      {...props.style}
    >
      <Flex
        justify='center'
        bg={
          (props.variant === 'light' && 'background') ||
          (props.variant === 'dark' && 'brand.500') ||
          'brand.500'
        }
        py={4}
        px={4}
        h='full'
        lineHeight={1.18}
        alignItems='center'
        textTransform='uppercase'
        letterSpacing={2}
        fontSize='sm'
        _hover={{
          filter: 'brightness(1.2)',
          bg: props.variant === 'light' && 'brand.300',
        }}
        _active={{ filter: 'brightness(0.9)' }}
        transition='all 200ms ease-in-out'
      >
        <chakra.span color={props.variant === 'light' ? 'headerText' : 'white'}>
          {props.children}
        </chakra.span>
      </Flex>
    </Box>
  );
};

export default Button;
