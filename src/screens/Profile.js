import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, {useContext, useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthenticationContext} from '../Navigation/AuthenticationProvider';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Flights = ({item}) => {
  return (
    <Box mt={2} bg="white" p={3} rounded={5} shadow={1}>
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
  );
};

const Comments = ({item}) => {
  return (
    <Box bg="white" rounded={(5, 5, 5, 5)} mt={3} p={4}>
      <HStack space={2}>
        <Avatar bg="blueGray.400">{`${item.userFirstName[0]}${item.userLastName[0]}`}</Avatar>
        <VStack>
          <Text>
            {item.userFirstName} {item.userLastName}
          </Text>
          <HStack>
            {['1', '2', '3', '4', '5'].map((element, index) => (
              <FontAwesome
                name="star"
                size={15}
                color={index < item.rating ? 'gold' : 'gray'}
                key={index}
              />
            ))}
          </HStack>
          <Text style={{fontSize: 12, fontWeight: '300'}}>
            {item.created_at}
          </Text>
        </VStack>
      </HStack>
      <Text pt={2}>{item.notes}</Text>
    </Box>
  );
};
const Profile = () => {
  const {logOut} = useContext(AuthenticationContext);
  const [route, setroute] = useState({
    firstName: 'Samba',
    lastName: 'NDIAYE',
    location: 'Paris',
    followers: 23,
    flights: [
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
    ],
    reviews: [
      {
        userFirstName: 'John',
        userLastName: 'Doe',
        rating: 5,
        notes:
          'Personne trés sérieuse, acceuil chaleureux à dakar, je recommande.',
        created_at: '25/08/2021',
      },
      {
        userFirstName: 'Marie',
        userLastName: 'Doe',
        rating: 3,
        notes:
          'Personne trés sérieuse, acceuil chaleureux à dakar, je recommande.',
        created_at: '25/08/2021',
      },
    ],
  });
  return (
    <NativeBaseProvider>
      <ScrollView>
        <VStack flex={1}>
          <Box bg="white" pb={3}>
            <HStack m={5} height={70}>
              <VStack flex={1}>
                <Heading>
                  {route.firstName} {route.lastName}
                </Heading>
                <HStack>
                  <Ionicon name="location" size={20} color="gray" />
                  <Text size="sm" color="gray.500">
                    {route.location}
                  </Text>
                </HStack>
              </VStack>
              <VStack alignItems="center">
                <Avatar bg="gray.300" size={12}>
                  SN
                </Avatar>
              </VStack>
            </HStack>
            <Center>
              <HStack space={5}>
                <Button
                  variant="solid"
                  size="lg"
                  px={10}
                  bg="blueGray.400"
                  _text={{color: 'white'}}
                  startIcon={
                    <Ionicon name="person-add" size={20} color="white" />
                  }>
                  Suivre
                </Button>
                <Button
                  _text={{color: 'white'}}
                  bg="amber.600"
                  startIcon={
                    <AntDesign name="message1" size={20} color="white" />
                  }
                  size="lg"
                  px={10}>
                  Message
                </Button>
              </HStack>
            </Center>
            <Divider my={5} size={1} bg="dark.600" mx={2} />
            <HStack justifyContent="space-around" px={10}>
              <VStack alignItems="center">
                <Text>1500</Text>
                <Text color="gray.400">Abonnés</Text>
              </VStack>
              <VStack alignItems="center">
                <Text>9 / 10</Text>
                <Text color="gray.400">Note</Text>
              </VStack>
              <VStack alignItems="center">
                <Text>19</Text>
                <Text color="gray.400">Vols</Text>
              </VStack>
            </HStack>
          </Box>
          <VStack p={5}>
            <Heading size="md" color="blueGray.600">
              Vols
            </Heading>
            <FlatList
              data={route.flights}
              renderItem={({item}) => <Flights item={item} />}
            />
          </VStack>
          <VStack p={5}>
            <Heading size="md" color="blueGray.600">
              Notes et commentaires
            </Heading>
            <FlatList
              data={route.reviews}
              nestedScrollEnabled={true}
              renderItem={({item}) => <Comments item={item} />}
            />
          </VStack>
          <Center mb={4}>
            <Button
              onPress={logOut}
              bg="red.500"
              _text={{color: 'white'}}
              endIcon={<MaterialIcons name="logout" size={15} color="white" />}>
              Se déconnecter
            </Button>
          </Center>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Profile;
