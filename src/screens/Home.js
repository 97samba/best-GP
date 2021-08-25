import {
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  Center,
  Divider,
} from 'native-base';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';

const Home = () => {
  const [popularDestinations, setpopularDestinations] = useState([
    {
      name: 'Paris',
      picture: 'primary.200',
      flights: 5,
      key: 1,
    },
    {
      name: 'Marseille',
      picture: 'primary.200',
      flights: 15,
      key: 2,
    },
    {
      name: 'Dakar',
      picture: 'primary.200',
      flights: 24,
      key: 3,
    },
    {
      name: 'Bandjul',
      picture: 'primary.200',
      flights: 24,
      key: 4,
    },
    {
      name: 'Abidjan',
      picture: 'primary.200',
      flights: 24,
      key: 5,
    },
  ]);
  return (
    <NativeBaseProvider>
      {/* <Heading>Home</Heading> */}
      <VStack>
        <Box p={5}>
          <VStack>
            <HStack justifyContent="space-between" alignItems="center">
              <Heading size="md">Destinations Populaires</Heading>
              <Button variant="ghost" size="md">
                voir
              </Button>
            </HStack>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={popularDestinations}
              renderItem={({item}) => (
                <Center p={5} bg="white" m={2} rounded="5" min>
                  <Text>{item.name}</Text>
                  <Text>{item.flights} vols</Text>
                </Center>
              )}
            />
          </VStack>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Home;
