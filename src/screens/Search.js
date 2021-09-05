import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Input,
  NativeBaseProvider,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Flights = ({item}) => {
  return (
    <Box mt={2} bg="white" rounded={5} shadow={(1, 0, 0, 1)}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="40%"
        width="100%">
        <View
          left={-10}
          width={5}
          height={5}
          border={1}
          borderColor="gray.200"
          rounded={50}
          overflow="hidden"
          bg="trueGray.100"></View>
        {/* <Divider width="80%" borderStyle="dotted" /> */}
        <View
          right={-10}
          width={5}
          height={5}
          border={1}
          borderColor="gray.200"
          // position="absolute"
          // top="50%"
          rounded={50}
          // right={-35}
          bg="trueGray.100"></View>
      </HStack>

      <Box p={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="lg" color="primary.600">
            {item.price} {item.currency}
          </Heading>
          <VStack alignItems="center">
            <Avatar bg="primary.600">I.F</Avatar>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              {item.firstName[0]}. {item.lastName}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" pt={2} space={1}>
          <MaterialIcon name="flight-takeoff" color="gray" size={20} />
          <Text> {item.from}</Text>
          <Divider width={10} mx={2} size={2} />
          <Text mr={1}>{item.to}</Text>
          <MaterialIcon name="flight-land" color="gray" size={20} />
        </HStack>
        <HStack justifyContent="space-between" pt={5}>
          <VStack>
            <Text bold>Départ </Text>
            <Text>{item.departure}</Text>
          </VStack>
          <VStack>
            <Text bold>Dernier dépot</Text>
            <Text>{item.distribution}</Text>
          </VStack>
          <VStack>
            <Text bold>Vol</Text>
            <Text>{item.flightMode}</Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

const Search = () => {
  const [searchResults, setsearchResults] = useState([
    {
      from: 'Paris',
      to: 'Dakar',
      firstName: 'Ibrahima',
      lastName: 'Faye',
      price: 10,
      currency: '€ ',
      departure: '10/10/2021',
      distribution: '10/10/2021',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 5,
      key: 1,
    },
    {
      from: 'London',
      to: 'Dakar',
      firstName: 'Ibrahima',
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
      to: 'Dakar',
      firstName: 'Ibrahima',
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
      key: 5,
    },
  ]);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <VStack m={5}>
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
            {/* <IconButton
              icon={<MaterialIcon name="tune" size={15} color="white" />}
              size="md"
              bg="grey"
            /> */}
          </HStack>
          <Box>
            <HStack>
              <Heading pt={5} size="md">
                Résultats :{' '}
                <Text fontSize={16}>{searchResults.length} vols</Text>
              </Heading>
            </HStack>
            <VStack>
              <FlatList
                nestedScrollEnabled={true}
                data={searchResults}
                renderItem={({item}) => <Flights item={item} />}
                showsVerticalScrollIndicator={false}
              />
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Search;
