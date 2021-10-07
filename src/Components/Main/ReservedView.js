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
  View,
  Avatar,
  Button,
} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import QRCode from 'react-native-qrcode-svg';
import {AuthenticationContext} from '../../Navigation/AuthenticationProvider';
import DashedLine from 'react-native-dashed-line';
import moment from 'moment';

const Notch = () => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top="60%"
      width="100%">
      <View
        width={3}
        height={6}
        border={1}
        borderColor="blueGray.400"
        borderRightRadius={50}
        overflow="hidden"
        bg="blueGray.400"></View>
      <DashedLine dashLength={5} />
      <View
        left={6}
        width={3}
        height={6}
        border={1}
        borderColor="blueGray.400"
        borderLeftRadius={50}
        overflow="hidden"
        bg="blueGray.400"></View>
    </HStack>
  );
};

const ETicket = ({item, user}) => {
  const [QRCodeValue, setQRCodeValue] = useState('false');
  const [QRCodeOpen, setQRCodeOpen] = useState(false);
  const getQRCodeValue = () => {
    const value = {
      uid: user.uid,
      displayName: user.displayName,
      departure: item.departure,
      destination: item.destination,
    };
    setQRCodeValue(JSON.stringify(value));
  };
  useEffect(() => {
    getQRCodeValue();
  });
  return (
    <Box
      flex={2}
      rounded={10}
      bg="blueGray.100"
      justifyContent="center"
      alignItems="center">
      <Heading size="xs" fontWeight={400} p={1} color="blueGray.600">
        - - - - - E-ticket - - - - -
      </Heading>

      <Pressable onPress={() => setQRCodeOpen(true)}>
        <QRCode value={QRCodeValue} size={110} />
      </Pressable>
      <Heading size="xs" fontWeight={400} pt={1} color="blueGray.600">
        Cliquez pour agrandir
      </Heading>
      <Modal isOpen={QRCodeOpen} onClose={() => setQRCodeOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Montrez ce QRCode au GP</Modal.Header>
          <Modal.Body minHeight={400}>
            <Box flex={1} justifyContent="center" alignItems="center">
              <QRCode value={QRCodeValue} size={300} />
              <Heading size="md" fontWeight={400} pt={2} color="blueGray.600">
                Scanner-moi
              </Heading>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

const ReservedView = ({navigation, route}) => {
  const {user} = useContext(AuthenticationContext);
  const {item, informations} = route.params;

  return (
    <NativeBaseProvider>
      <VStack bgColor="blueGray.400" flex={1} p={3}>
        <HStack justifyContent="space-between">
          <HStack alignItems="center">
            <Ionicon
              name="arrow-back"
              size={35}
              color="gold"
              onPress={() => navigation.goBack()}
            />
          </HStack>
          <Avatar
            bg="blueGray.300"
            _text={{fontSize: 14, color: 'gray.600'}}
            size={12}>
            {item.departure[0]}
          </Avatar>
        </HStack>
        <HStack
          px={3}
          my={4}
          space={4}
          justifyContent="space-between"
          alignItems="center">
          <Heading size="xl" color="white">
            {item.departure.charAt(0).toUpperCase() + item.departure.slice(1)}
          </Heading>
          <VStack justifyContent="center" alignItems="center">
            <HStack alignItems="center" space={2}>
              <Divider width={10} size={3} />
              <Ionicon name="airplane" size={20} color="gold" />
              <Divider width={10} size={3} />
            </HStack>
          </VStack>
          <Heading size="xl" color="white">
            {item.destination.charAt(0).toUpperCase() +
              item.destination.slice(1)}
          </Heading>
        </HStack>
        {/* <HStack justifyContent="center">
          <Text fontSize={12} color="white">
            {route.params.distributionDate.toDate().toLocaleDateString()}
          </Text>
        </HStack> */}
        <Box flex={1} bg="white" rounded={10} p={3}>
          <Notch />
          <Box flex={4}>
            <HStack alignItems="center" justifyContent="space-between" mb={2}>
              <HStack alignItems="center" space={2}>
                <Avatar
                  bg="blueGray.300"
                  _text={{fontSize: 14, color: 'gray.600'}}
                  size={10}>
                  {item.departure[0]}
                </Avatar>

                <HStack space={1} alignItems="center">
                  <Text fontSize="xs">{item.publisher.firstName}</Text>
                  <FontAwesome name="check-circle" size={14} color="gray" />
                </HStack>
              </HStack>
              <HStack space={8} p={2} rounded={5} borderColor="blueGray.500">
                <FontAwesome name="phone" size={20} color="gray" />
                <FontAwesome name="whatsapp" size={20} color="gray" />
              </HStack>
            </HStack>
            <Divider />

            <VStack space={3} p={2} flexGrow={1}>
              <HStack>
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Type
                  </Heading>
                  <Heading size="sm" color="dark.200" fontWeight={600}>
                    Téléphone
                  </Heading>
                </VStack>
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Distribution
                  </Heading>
                  <Heading size="sm" color="dark.200" fontWeight={600}>
                    {moment(item.distributionDate.toDate()).format('ll')}
                  </Heading>
                </VStack>
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Contact GP
                  </Heading>
                  <Heading color="dark.200" fontWeight={600} size="sm">
                    704562143
                  </Heading>
                </VStack>
              </HStack>

              <HStack>
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Receveur
                  </Heading>
                  <Heading color="dark.200" fontWeight={600} size="sm">
                    Samba Ndiaye
                  </Heading>
                </VStack>
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Poids
                  </Heading>
                  <Heading size="sm" color="dark.200" fontWeight={600}>
                    {informations.weight} kg
                  </Heading>
                </VStack>
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Contact
                  </Heading>
                  <Heading color="dark.200" fontWeight={600} size="sm">
                    774562345
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={1} />
              <HStack alignItems="flex-end" justifyContent="space-between">
                {/* price */}
                <VStack space={1} flex={1}>
                  <Heading size="sm" fontWeight="400" color="trueGray.500">
                    Prix
                  </Heading>
                  <HStack>
                    <Heading size="sm" fontWeight="400">
                      ${' '}
                    </Heading>
                    <Heading size="md" color="gold" fontWeight="500">
                      {informations.price}
                    </Heading>
                  </HStack>
                </VStack>

                {/* image */}
                <Button
                  bg="blueGray.100"
                  size="lg"
                  _text={{color: 'trueGray.600', fontSize: 'sm'}}
                  endIcon={
                    <MaterialIcon name="photo-library" size={20} color="gray" />
                  }>
                  Images
                </Button>
                {/* annulation */}
                <Button
                  bg="red.200"
                  size="md"
                  ml={2}
                  _text={{color: 'gray.600', fontSize: 'sm'}}
                  endIcon={
                    <MaterialIcon name="close" size={20} color="tomato" />
                  }>
                  Annuler
                </Button>
              </HStack>
              {informations.shipping ? (
                <HStack
                  mt={4}
                  alignItems="center"
                  justifyContent="center"
                  space={1}>
                  <Heading size="sm" style={{color: 'green'}} fontWeight="400">
                    Livraison gratuite
                  </Heading>
                  <FontAwesome5 name="shipping-fast" size={17} color="green" />
                </HStack>
              ) : (
                <HStack alignItems="center" space={1}>
                  <Heading size="sm" style={{color: 'gray'}} fontWeight="400">
                    Demander une livraison
                  </Heading>
                  <FontAwesome5 name="shipping-fast" size={17} color="gray" />
                </HStack>
              )}
            </VStack>
          </Box>
          <ETicket item={item} user={user} />
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default ReservedView;
