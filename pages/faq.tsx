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
import { client, faqQuery } from '../src/lib/sanity';
import { FaqPageProps } from '../src/types';

const FaqPage: NextPage = (props: FaqPageProps) => {
  const layoutProps: InnerPageLayoutProps = {
    imgSrc:
      'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    imgAlt: '',
    title: 'FAQ',
    subtitle: 'Answers to common questions',
  };

  return (
    <InnerPageLayout {...layoutProps}>
      <Box maxW="6xl" w="full" mx="auto" pb={16}>
        <Box px={{ base: 4, xl: 0 }}>
          <Header
            title="Common questions"
            subtitle="Contact us for additional info"
          />
        </Box>
        <Accordion mt={16} rounded="xl" allowToggle>
          {props.questions.map((item) => (
            <AccordionItem
              key={item._key}
              border="none"
              borderBottom="1px solid"
              borderColor="rgba(0,0,0,0.15) !important"
            >
              <h2>
                <AccordionButton
                  py={6}
                  _expanded={{ bg: 'brand.500', color: 'white' }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="semibold"
                    letterSpacing="wider"
                    fontSize="lg"
                  >
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={8} color="bodyText" letterSpacing="wide">
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </InnerPageLayout>
  );
};

export const getStaticProps = async () => {
  const faq = await client(false).fetch(faqQuery);

  return {
    props: faq,
  };
};

export default FaqPage;
