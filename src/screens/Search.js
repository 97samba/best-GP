import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Flights from '../Components/Flights/Flight';
import firestore from '@react-native-firebase/firestore';

const SearchHeader = ({searchResults}) => {
  return (
    <Box mt={5}>
      <HStack space={2}>
        <Input
          rounded={4}
          variant="unstyled"
          flex={2}
          bg="white"
          placeholder="Départ"
          InputLeftElement={
            <MaterialIcon
              name="flight-takeoff"
              size={20}
              color="gray"
              style={{marginLeft: 5}}
            />
          }
        />
        <Input
          rounded={4}
          variant="unstyled"
          flex={2}
          bg="white"
          placeholder="Arrivée"
          InputRightElement={
            <MaterialIcon
              name="flight-land"
              size={20}
              color="gray"
              style={{marginRight: 5}}
            />
          }
        />
      </HStack>
      <HStack>
        <Heading pt={5} size="md">
          Résultats : <Text fontSize={16}>{searchResults.length} vol(s)</Text>
        </Heading>
      </HStack>
    </Box>
  );
};

const Search = ({navigation}) => {
  const [searchResults, setsearchResults] = useState([
    {
      from: 'Paris',
      to: 'Dakar',
      firstName: 'Ibrahima',
      lastName: 'Faye',
      price: 10,
      currency: '€ ',
      departure: '10/10/2021',
      distribution: '10 octobre',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 5,
      key: 1,
    },
    {
      from: 'London',
      to: 'Abidjan',
      firstName: 'Samba',
      lastName: 'Faye',
      price: 8,
      currency: '£',
      departure: '10/10/2021',
      distribution: '10/10/2021',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 15,
      key: 2,
    },
    {
      from: 'New-York',
      to: 'Bandjul',
      firstName: 'Fatou',
      lastName: 'Faye',
      price: 15,
      currency: '$',
      departure: '10/10/2021',
      distribution: '10/10/2021',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 24,
      key: 3,
    },
    {
      from: 'Paris',
      to: 'Dakar',
      firstName: 'Ibrahima',
      lastName: 'Faye',
      price: 10,
      currency: '$',
      departure: '10/10/2021',
      distribution: '10/10/2021',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 24,
      key: 4,
    },
    {
      from: 'Paris',
      to: 'Thies',
      firstName: 'Ibrahima',
      lastName: 'Faye',
      price: 10,
      currency: '$',
      departure: '10/10/2021',
      distribution: '10/10/2021',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 24,
      key: 5,
    },
  ]);
  const [loading, setloading] = useState(true);
  const [results, setresults] = useState([]);

  useEffect(async () => {
    await firestore()
      .collection('flights')
      .get()
      .then(querySnapshot => {
        setresults(querySnapshot.docs);
      })
      .then(() => {
        setloading(false);
      });
  }, []);
  return (
    <NativeBaseProvider>
      <VStack mx={5} flex={1}>
        <Box>
          <VStack>
            <FlatList
              ListHeaderComponent={<SearchHeader searchResults={results} />}
              ListFooterComponent={
                <Center m={5}>
                  <Text>Fast GP</Text>
                </Center>
              }
              data={results}
              renderItem={({item}) =>
                loading ? (
                  <Box>
                    <Text>test</Text>
                  </Box>
                ) : (
                  <Flights
                    item={{...item.data(), id: item.id}}
                    navigation={navigation}
                  />
                )
              }
              showsVerticalScrollIndicator={false}
            />
          </VStack>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Search;
