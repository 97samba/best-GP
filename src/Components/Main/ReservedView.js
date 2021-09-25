import {
  Box,
  Heading,
  HStack,
  NativeBaseProvider,
  VStack,
  Text,
  Pressable,
  Divider,
  Modal,
} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';
import {AuthenticationContext} from '../../Navigation/AuthenticationProvider';

const ReservedView = ({navigation, route}) => {
  const {user} = useContext(AuthenticationContext);
  const [QRCodeValue, setQRCodeValue] = useState('false');
  const [QRCodeOpen, setQRCodeOpen] = useState(false);
  const getQRCodeValue = () => {
    const value = {
      uid: user.uid,
      displayName: user.displayName,
      departure: route.params.departure,
      destination: route.params.destination,
    };
    setQRCodeValue(JSON.stringify(value));
  };
  useEffect(() => {
    getQRCodeValue();
  });
  return (
    <NativeBaseProvider>
      <VStack bgColor="blueGray.400" flex={1} p={3} space={2}>
        <HStack p={3} space={4} justifyContent="space-between">
          <VStack>
            <Heading size="2xl" color="white">
              {route.params.departure.charAt(0).toUpperCase() +
                route.params.departure.slice(1)}
            </Heading>
            <HStack space={2}>
              <MaterialIcon name="flight-takeoff" size={15} color="gray" />
              <Text fontSize={13}>
                {route.params.departureDate.toDate().toLocaleDateString()}
              </Text>
            </HStack>
          </VStack>
          <VStack justifyContent="center" alignItems="center">
            <HStack alignItems="center" space={2}>
              <Divider width={10} size={3} />
              <Ionicon name="airplane" size={20} color="gold" />
              <Divider width={10} size={3} />
            </HStack>
            <HStack space={2} alignItems="center">
              <FontAwesome name="suitcase" size={13} color="white" />

              <Text fontSize={13}>54 kg</Text>
            </HStack>
          </VStack>
          <VStack>
            <Heading size="2xl" color="white">
              {route.params.destination.charAt(0).toUpperCase() +
                route.params.destination.slice(1)}
            </Heading>
            <HStack space={2}>
              <MaterialIcon name="flight-land" size={15} color="gray" />
              <Text fontSize={13}>
                {route.params.distributionDate.toDate().toLocaleDateString()}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Box flex={5} rounded={20} p={3} bg="white">
          <Box flex={3}></Box>
          <Box
            flex={3}
            rounded={20}
            bg="blueGray.100"
            justifyContent="center"
            alignItems="center">
            <Heading size="sm" fontWeight={400} p={2} color="blueGray.600">
              - - - - - E-ticket - - - - -
            </Heading>
            <Pressable onPress={() => setQRCodeOpen(true)}>
              <QRCode value={QRCodeValue} size={130} />
            </Pressable>
            <Heading size="sm" fontWeight={400} pt={2} color="blueGray.600">
              Cliquez pour agrandir
            </Heading>
            <Modal isOpen={QRCodeOpen} onClose={() => setQRCodeOpen(false)}>
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Montrez ce QRCode au GP</Modal.Header>
                <Modal.Body minHeight={400}>
                  <Box flex={1} justifyContent="center" alignItems="center">
                    <QRCode value={QRCodeValue} size={300} />
                    <Heading
                      size="md"
                      fontWeight={400}
                      pt={2}
                      color="blueGray.600">
                      Scanner-moi
                    </Heading>
                  </Box>
                </Modal.Body>
              </Modal.Content>
            </Modal>
          </Box>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default ReservedView;
