import {
  Box,
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps,
  VisuallyHidden,
} from '@chakra-ui/react';
import React from 'react';

const Textarea = (props: TextareaProps & { label: string }) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);
  return (
    <FormControl>
      <VisuallyHidden>
        <FormLabel>{props.label}</FormLabel>
      </VisuallyHidden>
      <Box overflow="hidden" w="full" h="full">
        <ChakraTextarea
          {...props}
          placeholder="Enter your message"
          _placeholder={{ textTransform: 'uppercase', fontSize: 'xs' }}
          style={{ caretColor: 'headerText' }}
          color="headerText"
          fontSize="sm"
          rounded="none"
          border={0}
          px={1}
          transformOrigin="0 0"
          _focus={{ boxShadow: 'none' }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => setIsEmpty(event.target.value.length === 0)}
        />
        <Box
          mt={1}
          w="200%"
          h={0.5}
          bgGradient="linear(to-r, brand.500 50%, rgba(0,0,0,0.1) 50%)"
          transition="200ms ease-in-out"
          transform={
            focused || !isEmpty ? 'translateX(0%)' : 'translateX(-50%)'
          }
        />
      </Box>
    </FormControl>
  );
};
export default Textarea;
