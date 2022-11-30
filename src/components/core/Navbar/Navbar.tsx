import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { SimpleGrid } from '@chakra-ui/react';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '/public/logo.svg';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Properties',
    sections: [
      {
        name: 'Style',
        items: [
          { name: 'Single-family', path: '#' },
          { name: 'Multi-family', path: '#' },
          { name: 'Townhouse', path: '#' },
          { name: 'Duplex', path: '#' },
          { name: 'Condominium', path: '#' },
          { name: 'Farmhouse', path: '#' },
          { name: 'Ranch', path: '#' },
          { name: 'Tiny home', path: '#' },
        ],
      },
      {
        name: 'Type',
        items: [
          { name: 'Houses', path: '#' },
          { name: 'Apartments', path: '#' },
          { name: 'Commercial Spaces', path: '#' },
          { name: 'Land', path: '#' },
        ],
      },
      {
        name: 'Area',
        items: [
          { name: 'Toledo', path: '#' },
          { name: 'Perrysburg', path: '#' },
          { name: 'Maumee', path: '#' },
          { name: 'Sylvania', path: '#' },
          { name: 'Swanton', path: '#' },
        ],
      },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position='sticky'
      top={0}
      zIndex={50}
      width='100vw'
      px={4}
      bg='cardBackground'
      borderBottom={'2px solid'}
      borderColor='background'
      shadow='md'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing={4}
    >
      <Flex
        h={16}
        justifyContent='space-between'
        alignItems='center'
        maxW='8xl'
        marginX='auto'
      >
        <Flex alignItems='center' gap={4}>
          <Image
            src={logo}
            alt='Logo'
            style={{
              objectFit: 'contain',
              height: '2rem',
              width: 'fit-content',
            }}
          />
          <Text
            fontSize='xl'
            letterSpacing='widest'
            textTransform='uppercase'
            color='headerText !important'
          >
            Logoipsum
          </Text>
        </Flex>

        <HStack spacing={8} alignItems='center'>
          <HStack
            as='nav'
            spacing={6}
            alignItems='center'
            display={{ base: 'none', md: 'flex' }}
          >
            {navLinks.map((link, index) => {
              return !link.sections ? (
                <NavLink key={index} {...link} onClose={onClose} />
              ) : (
                <Menu key={index} autoSelect={false} isLazy>
                  {({ isOpen, onClose }) => (
                    <>
                      <MenuButton
                        py={2}
                        transition='150ms ease-in-out'
                        _hover={{ color: 'brand.500' }}
                        role='group'
                      >
                        <Flex alignItems='center'>
                          <Text
                            fontWeight='normal'
                            lineHeight='inherit'
                            textTransform='uppercase'
                            letterSpacing={4}
                            transition='150ms ease-in-out'
                            _groupHover={{ color: 'brand.500 !important' }}
                          >
                            {link.name}
                          </Text>
                          <Icon
                            as={FaChevronDown}
                            h={3}
                            w={3}
                            ml={1}
                            color='subtleText'
                            transition='all .25s ease-in-out'
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            _groupHover={{ color: 'brand.500' }}
                          />
                        </Flex>
                      </MenuButton>
                      <MenuList
                        zIndex={5}
                        border='none'
                        shadow='lg'
                        px={8}
                        py={4}
                        overflow='hidden'
                      >
                        <>
                          <SimpleGrid columns={link.sections.length} gap={28}>
                            {link.sections.map((section, index) => (
                              <Box key={index}>
                                <chakra.span fontWeight='bold'>
                                  {section.name}
                                </chakra.span>
                                <Box
                                  h={1}
                                  w={28}
                                  bg='brand.500'
                                  mt={1}
                                  mb={2}
                                />
                                {section.items.map((item, index) => (
                                  <MenuLink
                                    key={index}
                                    name={item.name}
                                    path={item.path}
                                    onClose={onClose}
                                  />
                                ))}
                              </Box>
                            ))}
                          </SimpleGrid>
                        </>
                      </MenuList>
                    </>
                  )}
                </Menu>
              );
            })}
          </HStack>
        </HStack>
        <IconButton
          bg='transparent'
          color='headerText'
          size='lg'
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label='Open Menu'
          display={{ base: 'inherit', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={{ base: 'inherit', md: 'none' }}>
          <Stack as='nav' spacing={2}>
            {navLinks.map((link, index) => {
              return !link.sections ? (
                <NavLink key={index} {...link} onClose={onClose} />
              ) : (
                <Accordion allowToggle border='none'>
                  <AccordionItem border='none'>
                    <Flex justifyContent='space-between' alignItems='center'>
                      <AccordionButton
                        _hover={{ bg: 'transparent' }}
                        fontSize='sm'
                        color='bodyText'
                        px={0}
                        py={2}
                        textTransform='uppercase'
                        letterSpacing={4}
                      >
                        {link.name}
                      </AccordionButton>
                      <AccordionIcon w={5} h={5} />
                    </Flex>
                    <AccordionPanel display='flex' flexDirection='column'>
                      {link.sections
                        .filter((item) => item.name === 'Type')
                        .map((link, index) => {
                          return link.items.map((item) => (
                            <NavLink key={index} {...item} onClose={onClose} />
                          ));
                        })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

// NavLink Component
interface NavLinkProps {
  name: string;
  path?: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={path}
      py={2}
      lineHeight='inherit'
      color={router.pathname === path ? 'brand.500' : 'bodyText'}
      _hover={{
        color: 'brand.500',
      }}
      transition='150ms ease-in-out'
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()} role='group'>
      <MenuItem
        p={0}
        _groupHover={{
          bg: 'transparent',
        }}
      >
        <Text
          textTransform='uppercase'
          letterSpacing={2}
          transition='150ms ease-in-out'
          _groupHover={{ color: 'brand.500 !important' }}
        >
          {name}
        </Text>
      </MenuItem>
    </Link>
  );
};

export default Navbar;
