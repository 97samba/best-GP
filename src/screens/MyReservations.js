import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  Divider,
  Pressable,
} from 'native-base';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Flights = ({item, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Ticket', item)}>
      <Box mb={2} bg="white" p={3} rounded={5} shadow={1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="lg" color="primary.600">
            {item.price} {item.currency}
          </Heading>
          <HStack alignItems="center">
            <MaterialIcons name="flight-takeoff" color="gray" size={20} />

            <Text> {item.from}</Text>
            <Divider width={10} mx={2} size={2} />
            <Text mr={1}>{item.to}</Text>
            <MaterialIcons name="flight-land" color="gray" size={20} />
          </HStack>
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
    </Pressable>
  );
};

const MyReservations = ({navigation}) => {
  const [flights, setflights] = useState([
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
  ]);
  return (
    <NativeBaseProvider>
      <HStack justifyContent="space-between" p={5}>
        <Heading>Mes réservations</Heading>
        <Avatar bg="trueGray.200">SN</Avatar>
      </HStack>
      <VStack p={5}>
        <FlatList
          data={flights}
          renderItem={({item}) => (
            <Flights item={item} navigation={navigation} />
          )}
        />
      </VStack>
    </NativeBaseProvider>
  );
};

export default MyReservations;
