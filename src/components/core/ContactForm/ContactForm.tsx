import { FormControl, Stack } from '@chakra-ui/react';
import { Button } from '../Button';
import { Header } from '../Header';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

const ContactForm = () => {
  return (
    <Stack
      position={{ base: 'relative', lg: 'absolute' }}
      zIndex={1}
      bottom={{ base: 16, '2xl': 32 }}
      right={{ lg: 8, xl: 32 }}
      maxW='md'
      w='full'
      bg='cardBackground'
      p={8}
      rounded='xl'
      shadow='lg'
      spacing={4}
    >
      <Header title='Get in touch' subtitle='Anim et anim magna' />
      <FormControl as={Stack} spacing={6}>
        <Input label='Name' autoComplete='name' />
        <Input label='Phone' autoComplete='phone' />
        <Input label='Email' autoComplete='email' />
        <Textarea label='Enter your message' />
        <Button ariaLabel='Send message'>Send</Button>
      </FormControl>
    </Stack>
  );
};

export default ContactForm;
