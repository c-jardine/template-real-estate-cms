import {
  chakra,
  Table,
  TableContainer,
  TabPanel,
  Tbody,
  Td,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { PropertyProps } from '../../../types';

const ResidentialPropertyFeaturesTab = (props: PropertyProps) => {
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
              <Td>Feature</Td>
              <Td>Description</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Type</Td>
              <Td>{props.features.type}</Td>
            </Tr>
            <Tr>
              <Td>Date built</Td>
              <Td>{format(new Date(props.buildDate), 'yyyy')}</Td>
            </Tr>
            <Tr>
              <Td>Bedrooms</Td>
              <Td>{props.features.bedrooms}</Td>
            </Tr>
            <Tr>
              <Td>Bathrooms</Td>
              <Td display='flex' gap={2} alignItems='center'>
                <chakra.span lineHeight={1}>
                  {props.features.bathrooms.full}{' '}
                  <chakra.span>full</chakra.span>
                </chakra.span>
                <chakra.span fontWeight='semibold' fontSize='lg'>
                  |
                </chakra.span>
                <chakra.span lineHeight={1}>
                  {props.features.bathrooms.half}{' '}
                  <chakra.span>half</chakra.span>
                </chakra.span>
              </Td>
            </Tr>
            <Tr>
              <Td>Garage</Td>
              <Td>{props.features.garage}</Td>
            </Tr>
            <Tr>
              <Td>Driveway</Td>
              <Td>{props.features.driveway}</Td>
            </Tr>
            <Tr>
              <Td>Basement</Td>
              <Td>{props.features.basement}</Td>
            </Tr>
            <Tr>
              <Td>Attic</Td>
              <Td>{props.features.attic}</Td>
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
              <Td>Utility</Td>
              <Td>Type</Td>
              <Td>Fuel</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Cooling</Td>
              <Td>
                {props.features.coolingType?.toString().replaceAll(',', ', ')}
              </Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>Heating</Td>
              <Td>
                {props.features.heatingType?.toString().replaceAll(',', ', ')}
              </Td>
              <Td>
                {props.features.heatingFuel?.toString().replaceAll(',', ', ')}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
};
export default ResidentialPropertyFeaturesTab;
