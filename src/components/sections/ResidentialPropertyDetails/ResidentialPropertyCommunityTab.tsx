import {
  Link,
  Table,
  TableContainer,
  TabPanel,
  Tbody,
  Td,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import getWalkScore, {
  WalkScoreProps,
} from '../../../../lib/helpers/walkscore';
import { PropertyProps } from '../../../types';

const ResidentialPropertyCommunityTab = (props: PropertyProps) => {
  const [walkscore, setWalkscore] = React.useState<WalkScoreProps>(null);

  React.useEffect(() => {
    (async () => {
      const res = await getWalkScore(props.listing.address);
      setWalkscore(res);
    })();
  }, [props.listing.address]);

  return (
    <TabPanel p={0}>
      <TableContainer>
        <Table variant='simple'>
          <Thead bg='chalkboard' color='white'>
            <Tr
              fontSize='sm'
              textTransform='uppercase'
              fontWeight='bold'
              letterSpacing='wide'
            >
              <Td>Nearby</Td>
              <Td>Score</Td>
              <Td>Description</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Link
                  href={walkscore?.help_link}
                  target='_blank'
                  rel='noreferrer'
                >
                  Walk Score&reg;
                </Link>
              </Td>
              <Td>
                <Link
                  href={walkscore?.help_link}
                  target='_blank'
                  rel='noreferrer'
                >
                  {walkscore?.walkscore}
                </Link>
              </Td>
              <Td>{walkscore?.description}</Td>
            </Tr>
            <Tr>
              <Td>
                <Link
                  href={walkscore?.help_link}
                  target='_blank'
                  rel='noreferrer'
                >
                  Bike Score&reg;
                </Link>
              </Td>
              <Td>
                <Link
                  href={walkscore?.help_link}
                  target='_blank'
                  rel='noreferrer'
                >
                  {walkscore?.bike.score}
                </Link>
              </Td>
              <Td>{walkscore?.bike.description}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table variant='simple'>
          <Thead bg='chalkboard' color='white'>
            <Tr
              fontSize='sm'
              textTransform='uppercase'
              fontWeight='bold'
              letterSpacing='wide'
            >
              <Td>Grade Level</Td>
              <Td>School Name</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Elementary</Td>
              <Td>{props.community?.nearbySchools?.elementary}</Td>
            </Tr>
            <Tr>
              <Td>Middle</Td>
              <Td>{props.community?.nearbySchools?.middle}</Td>
            </Tr>
            <Tr>
              <Td>High</Td>
              <Td>{props.community?.nearbySchools?.high}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
};
export default ResidentialPropertyCommunityTab;
