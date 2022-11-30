import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Header } from '../src/components';
import { InnerPageLayout, InnerPageLayoutProps } from '../src/layouts';

const Questions = [
  {
    id: 0,
    question: 'Commodo deserunt dolor sit labore anim?',
    answer:
      'Proident consectetur consectetur minim occaecat. Est duis est aliquip eu elit mollit aliquip. Mollit dolore aliquip deserunt dolore aliquip occaecat ipsum mollit. Ex et enim cupidatat deserunt consequat irure sit id dolore occaecat. Eiusmod cillum Lorem amet anim ut.',
  },
  {
    id: 1,
    question: 'Magna eu et reprehenderit mollit?',
    answer:
      'Ipsum laboris nulla pariatur occaecat nulla veniam non dolore. Pariatur adipisicing aute labore ut proident est est id consectetur nulla sit ullamco. Sunt quis pariatur aliqua Lorem occaecat cillum eu quis sunt laboris quis sunt sint occaecat. Laboris sint excepteur aute enim. Excepteur elit non voluptate mollit exercitation consectetur incididunt et. Aliqua tempor elit ea in mollit aliqua sunt quis qui minim fugiat tempor sit. Labore ad irure proident est nostrud.',
  },
  {
    id: 2,
    question: 'Velit ad veniam aliqua ex officia cillum irure?',
    answer:
      'Do enim ea cillum reprehenderit enim dolor officia esse ut aliqua mollit. Veniam enim sint aliqua exercitation proident sunt ullamco. Ea sint laboris officia eu labore et tempor. Adipisicing anim proident ipsum eiusmod veniam voluptate est exercitation. Mollit dolor quis consectetur magna ipsum aliqua enim veniam.',
  },
  {
    id: 3,
    question: 'Incididunt voluptate culpa aliqua esse sint excepteur in?',
    answer:
      'Voluptate adipisicing dolor ut laboris commodo sint officia consequat enim ea labore ex elit. Exercitation nostrud commodo excepteur excepteur exercitation id irure sunt fugiat exercitation elit. Qui nisi velit et aute dolor tempor aute amet excepteur. Eiusmod anim duis velit do proident adipisicing pariatur nisi ad enim ipsum ad consectetur non. Ullamco exercitation enim laboris exercitation dolor ex do cupidatat officia in ut commodo. Culpa sit aliquip cillum in reprehenderit ipsum exercitation in amet. Tempor proident dolor amet dolore amet ipsum fugiat nisi sunt culpa.',
  },
  {
    id: 4,
    question: 'Adipisicing aliquip est Lorem voluptate sit?',
    answer:
      'Incididunt id esse ut nulla et adipisicing aliqua ut nulla deserunt reprehenderit aliquip quis. Velit consectetur sint amet proident cupidatat occaecat cillum fugiat minim aute officia. Sunt fugiat commodo et et non ut. Ex in magna est consectetur commodo. Ad quis dolor velit id dolore non cupidatat. Non excepteur Lorem ipsum veniam nulla ut dolor aliquip id consequat excepteur fugiat.',
  },
  {
    id: 5,
    question: 'Ea minim fugiat Lorem consectetur cillum?',
    answer:
      'Adipisicing aliqua elit mollit anim enim est duis ex sunt. Enim sint aute consectetur ullamco et cupidatat adipisicing qui. Consectetur laboris non amet non minim elit reprehenderit. Nisi do do ipsum pariatur amet culpa est ex magna. Et occaecat consectetur proident mollit sunt anim ad quis occaecat cupidatat esse.',
  },
  {
    id: 6,
    question: 'Veniam non cillum sit ex adipisicing in anim?',
    answer:
      'Veniam consectetur consectetur laborum qui quis amet enim occaecat irure dolor occaecat sint nulla. Esse non veniam ipsum ex proident est. Anim sunt amet non esse fugiat amet nostrud dolor dolore cillum et deserunt. Cupidatat deserunt irure eu officia nulla tempor pariatur nisi id eu qui. Proident do elit culpa minim laborum et cupidatat enim nostrud irure non. Nostrud est ad ullamco ut nulla commodo eiusmod ullamco ad qui sint mollit ex pariatur. Dolor et labore aliqua est.',
  },
  {
    id: 7,
    question:
      'Ullamco quis laboris elit laboris labore nulla officia magna aliqua?',
    answer:
      'Elit officia duis pariatur ex sint voluptate pariatur cillum occaecat laborum exercitation quis enim. Sint anim id anim nostrud sint occaecat non eu. Id exercitation eu excepteur Lorem sit tempor sint incididunt elit aliqua esse amet enim consequat. Labore ad quis duis duis quis duis ullamco est reprehenderit nostrud in aute et. Esse irure occaecat aute tempor cillum non cillum enim sit amet minim tempor ad. Eu aute non fugiat occaecat id ea esse et nostrud tempor veniam consequat sunt magna.',
  },
  {
    id: 8,
    question: 'Anim laborum eiusmod voluptate nisi esse enim amet est?',
    answer:
      'Eu minim labore aliquip sunt fugiat officia. Adipisicing consectetur consequat anim in. Laboris minim eu ad cillum exercitation excepteur est nulla. Dolor adipisicing anim commodo enim anim deserunt aute. Aute in sit Lorem incididunt eu cupidatat eu magna cillum. Ex anim et dolore esse ut magna culpa anim officia culpa id aliquip magna ex.',
  },
  {
    id: 9,
    question: 'Ea esse laboris sunt enim?',
    answer:
      'Enim pariatur reprehenderit non et ullamco anim excepteur sit ipsum velit aliquip eu amet qui. Sit consequat ea qui duis do sit magna. Ad ex fugiat pariatur ut consequat quis quis anim eiusmod Lorem laborum. Ipsum aute minim minim nostrud elit nostrud exercitation nulla enim officia ipsum. Nostrud veniam proident commodo cillum exercitation reprehenderit consectetur.',
  },
];

const FaqPage: NextPage = () => {
  const props: InnerPageLayoutProps = {
    imgSrc:
      'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    imgAlt: '',
    title: 'FAQ',
    subtitle: 'Answers to common questions',
  };

  return (
    <InnerPageLayout {...props}>
      <Box maxW='6xl' w='full' mx='auto' pb={16}>
        <Box px={{ base: 4, xl: 0 }}>
          <Header
            title='Common questions'
            subtitle='Contact us for additional info'
          />
        </Box>
        <Accordion mt={16} rounded='xl' allowToggle>
          {Questions.map((item) => (
            <AccordionItem
              key={item.id}
              border='none'
              borderBottom='1px solid'
              borderColor='rgba(0,0,0,0.15) !important'
            >
              <h2>
                <AccordionButton
                  py={6}
                  _expanded={{ bg: 'brand.500', color: 'white' }}
                >
                  <Box
                    flex='1'
                    textAlign='left'
                    fontWeight='semibold'
                    letterSpacing='wider'
                    fontSize='lg'
                  >
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={8} color='bodyText' letterSpacing='wide'>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </InnerPageLayout>
  );
};
export default FaqPage;
