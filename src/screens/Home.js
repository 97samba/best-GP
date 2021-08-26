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
  Input,
  Image,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Flights = ({item}) => {
  return (
    <Box ml={2} mb={2} bg="white" p={2} rounded={5} shadow={(1, 1, 1, 1)}>
      <HStack justifyContent="space-between" alignItems="center" space={3}>
        <Heading size="lg" color="primary.600">
          {item.price} {item.currency}
        </Heading>
        <HStack alignItems="center">
          <MaterialIcons name="flight-takeoff" color="gray" size={20} />

          <Text> {item.from}</Text>
          <Divider width={5} mx={2} size={2} />
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
      </HStack>
    </Box>
  );
};

const Header = () => {
  return (
    <VStack flex={2} bg="primary.100" p={5}>
      {/* <Image
        source={require('../assets/airplane-background.jpg')}
        alt="gp-background"
        position="absolute"
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      /> */}
      <HStack space={2} pb={7}>
        <Fontisto name="suitcase" size={30} color="gray" />
        <Heading size="lg" color="blueGray.600">
          Best GP
        </Heading>
      </HStack>
      <VStack>
        <Text fontSize="3xl">Ou voulez-vous</Text>
        <Text fontSize="3xl">
          envoyer un{' '}
          <Text bold fontSize="3xl">
            colis ?
          </Text>{' '}
        </Text>
        <HStack>
          <Box style={{position: 'absolute', top: 1}} width="100%" shadow={5}>
            <Input
              placeholder="Destination"
              variant="unstyled"
              isFullWidth
              InputLeftElement={
                <Ionicon
                  style={{marginLeft: 10}}
                  name="location"
                  size={25}
                  color="gray"
                />
              }
              bg="white"
            />
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

const Publications = ({recent}) => {
  return (
    <VStack mt={10} flex={2}>
      <HStack justifyContent="space-between" alignItems="center" px={5}>
        <Heading size="md">Publications récentes</Heading>
        <Button variant="ghost" size="md">
          voir
        </Button>
      </HStack>
      <HStack pl={2}>
        <FlatList
          horizontal
          data={recent}
          renderItem={({item}) => <Flights item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </HStack>
    </VStack>
  );
};

const Destinations = ({popularDestinations}) => {
  return (
    <Box flex={2}>
      <VStack>
        <HStack px={5} justifyContent="space-between" alignItems="center">
          <Heading size="md">Destinations Populaires</Heading>
          <Button variant="ghost" size="md" color="blueGray.400">
            voir
          </Button>
        </HStack>
        <Box ml={5} mb={2}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={popularDestinations}
            renderItem={({item}) => (
              <View rounded={2} mr={2} p={2} style={{width: 100, height: 130}}>
                <Image
                  source={
                    item.key % 2 === 0
                      ? require(`../assets/espagne.jpg`)
                      : require(`../assets/paris-France.jpg`)
                  }
                  resizeMode="cover"
                  alt="image"
                  width={100}
                  height={130}
                  position="absolute"
                  rounded={5}
                />
                <VStack
                  position="absolute"
                  width={100}
                  height={130}
                  justifyContent="flex-end">
                  <HStack
                    justifyContent="space-between"
                    px={1}
                    width={100}
                    height={7}
                    style={{backgroundColor: 'rgba(52, 52, 52, 0.4)'}}>
                    <Text color="white">{item.name}</Text>
                    <Text color="white">{item.flights} </Text>
                  </HStack>
                </VStack>
              </View>
            )}
          />
        </Box>
      </VStack>
    </Box>
  );
};
const Home = () => {
  const [popularDestinations, setpopularDestinations] = useState([
    {
      name: 'Paris',
      picture: 'primary.200',
      flights: 5,
      image: 'paris-France.jpg',
      key: 1,
    },
    {
      name: 'Marseille',
      picture: 'primary.200',
      image: 'espagne.jpg',

      flights: 4,
      key: 2,
    },
    {
      name: 'Dakar',
      picture: 'primary.200',
      image: 'paris-France.jpg',

      flights: 24,
      key: 3,
    },
    {
      name: 'Bandjul',
      picture: 'primary.200',
      image: 'paris-France.jpg',

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
  const [recent, setrecent] = useState([
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
      from: 'New York',
      to: 'Dakar',
      firstName: 'Ibrahima',
      lastName: 'Faye',
      price: 12,
      currency: '$',
      departure: '10/10/2021',
      distribution: '10/10/2021',
      flightMode: 'Direct',
      picture: 'primary.200',
      flights: 15,
      key: 3,
    },
  ]);
  return (
    <NativeBaseProvider>
      {/* <Heading>Home</Heading> */}
      <ScrollView flex={1}>
        <VStack flex={1} bg="coolGray.100">
          <Header />
          <Publications recent={recent} />
          <Destinations popularDestinations={popularDestinations} />
          <Destinations popularDestinations={popularDestinations} />
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
