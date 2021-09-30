import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  Button,
} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import {AuthenticationContext} from '../Navigation/AuthenticationProvider';
import Flights from '../Components/Flights/Flight';

const MyReservations = ({navigation}) => {
  const {user} = useContext(AuthenticationContext);
  const [flights, setFlights] = useState([]);
  const [loadingReservations, setloadingReservations] = useState(true);

  const getMyReservations = async () => {
    const IDs = await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(collection => {
        return collection.data().purchased;
      });

    if (IDs) {
      await firestore()
        .collection('flights')
        .get()
        .then(querySnapshot => {
          var newState = [];
          querySnapshot.docs.forEach(doc => {
            if (IDs.includes(doc.id)) {
              newState.push(doc.data());
            }
          });
          setFlights(newState);
          setloadingReservations(false);
        });
    } else {
      setloadingReservations(false);
    }
  };
  useEffect(async () => {
    getMyReservations();
  }, []);

  return (
    <NativeBaseProvider>
      <VStack bg="trueGray.100" flex={1}>
        <HStack justifyContent="space-between" p={5}>
          <Heading>Mes réservations</Heading>
          <Avatar bg="trueGray.200">SN</Avatar>
        </HStack>
        <Button mb={2} onPress={getMyReservations}>
          Rafraichir
        </Button>

        <VStack px={4} flex={1}>
          {loadingReservations ? (
            <Box>
              <Text>Chargement des réservations</Text>
            </Box>
          ) : flights.length > 0 ? (
            <FlatList
              data={flights}
              renderItem={({item}) => (
                <Flights item={item} navigation={navigation} type="reserved" />
              )}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text>No flights</Text>
          )}
        </VStack>
      </VStack>
    </NativeBaseProvider>
  );
};

export default MyReservations;
