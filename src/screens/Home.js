import {
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  Divider,
  Input,
  Image,
  View,
  FormControl,
  Avatar,
} from 'native-base';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Flights from '../Components/Flights/Flight';

const Flightss = ({item}) => {
  return (
    <Box
      ml={2}
      mb={2}
      bg="white"
      border={0.5}
      borderColor="coolGray.300"
      p={2}
      rounded={5}
      shadow={(1, 1, 1, 1)}>
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
    <VStack flex={2} bg="trueGray.100" p={5}>
      <VStack>
        <HStack justifyContent="space-between">
          <VStack>
            <Text fontSize="2xl">Où voulez-vous</Text>
            <Text fontSize="2xl">
              envoyer un{' '}
              <Text bold fontSize="3xl">
                colis ?
              </Text>{' '}
            </Text>
          </VStack>
          <Avatar bg="trueGray.300">SN</Avatar>
        </HStack>
        <HStack>
          <Box width="100%" mt={2} bg="white" px={2} py={1} rounded={10}>
            <FormControl>
              <Input
                placeholder="Départ"
                variant="unstyled"
                isFullWidth
                bg="white"
                fontSize={16}
                InputLeftElement={
                  <MaterialIcons
                    name="flight-takeoff"
                    color="gray"
                    size={25}
                    style={{marginHorizontal: 10}}
                  />
                }
              />
            </FormControl>
            <Divider size={0.7} />

            <FormControl>
              <Input
                mt={2}
                fontSize={16}
                placeholder="Destination"
                variant="unstyled"
                isFullWidth
                bg="white"
                InputLeftElement={
                  <MaterialIcons
                    name="flight-land"
                    color="gray"
                    size={25}
                    style={{marginHorizontal: 10}}
                  />
                }
              />
            </FormControl>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

const Publications = ({recent, navigation}) => {
  return (
    <VStack mt={2} flex={2}>
      <HStack justifyContent="space-between" alignItems="center" px={5}>
        <Heading size="md">Publications récentes</Heading>
        <Button variant="ghost" size="md" _text={{color: 'blueGray.500'}}>
          voir
        </Button>
      </HStack>
      <HStack pl={2}>
        <FlatList
          horizontal
          data={recent}
          renderItem={({item}) => (
            <Box m={2}>
              <Flights item={item} navigation={navigation} />
            </Box>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </HStack>
    </VStack>
  );
};

const Destinations = ({popularDestinations, navigation}) => {
  return (
    <Box flex={2}>
      <VStack>
        <HStack px={5} justifyContent="space-between" alignItems="center">
          <Heading size="md">Destinations Populaires</Heading>
          <Button variant="ghost" size="md" _text={{color: 'blueGray.500'}}>
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
const Home = ({navigation}) => {
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
      departure: 'New York',
      departureDate: new Date(),
      depotAdresse: 'Sacré coeur, Dakar',
      destination: 'Banjul',
      distributionDate: new Date(),
      lastDepot: new Date(),
      pricePerKg: '12',
      pricePerSuitcase: '200',
      publisher: {
        firsName: 'Samba',
        id: 'ki8Aok1CrWheoEhlhPCH8JS1d742',
        lastName: 'Ndiaye',
        phone: '0612345687',
      },
      retraitAdresse: 'Barbes Rochechoir, Paris 18',
      valise: [
        {key: 1, poids: 23, type: 'soute', unite: 'kg'},
        {key: 2, poids: 12, type: 'cabine', unite: 'kg'},
      ],
    },
    {
      departure: 'New York',
      departureDate: new Date(),
      depotAdresse: 'Sacré coeur, Dakar',
      destination: 'Banjul',
      distributionDate: new Date(),
      lastDepot: new Date(),
      pricePerKg: '12',
      pricePerSuitcase: '200',
      publisher: {
        firsName: 'Assane',
        id: 'ki8Aok1CrWheoEhlhPCH8JS1d742',
        lastName: 'Ndiaye',
        phone: '0612345687',
      },
      retraitAdresse: 'Barbes Rochechoir, Paris 18',
      valise: [
        {key: 1, poids: 23, type: 'soute', unite: 'kg'},
        {key: 2, poids: 12, type: 'cabine', unite: 'kg'},
      ],
    },
  ]);
  return (
    <NativeBaseProvider>
      {/* <Heading>Home</Heading> */}
      <ScrollView flex={1}>
        <VStack flex={1} bg="trueGray.100">
          <Header />
          <Destinations popularDestinations={popularDestinations} />
          <Publications recent={recent} navigation={navigation} />
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
