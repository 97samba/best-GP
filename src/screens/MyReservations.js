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
  View,
} from 'native-base';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Flights = ({item, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Ticket', item)}>
      <Box
        mb={2}
        bg="white"
        rounded={5}
        shadow={1}
        border={1}
        borderColor="gray.200">
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
            <HStack alignItems="center">
              <MaterialIcons name="flight-takeoff" color="gray" size={20} />

              <Text fontSize={18} fontWeight="bold" color="blueGray.500">
                {' '}
                {item.from}
              </Text>
              <Divider width={10} mx={2} size={2} />
              <Text fontSize={18} fontWeight="bold" color="blueGray.500" mr={1}>
                {item.to}
              </Text>
              <MaterialIcons name="flight-land" color="gray" size={20} />
            </HStack>
          </HStack>

          <HStack justifyContent="space-between" mt={5}>
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
      <VStack bg="trueGray.100" flex={1}>
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
      </VStack>
    </NativeBaseProvider>
  );
};

export default MyReservations;
