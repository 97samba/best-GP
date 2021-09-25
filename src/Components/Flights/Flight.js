import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Notch = () => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top="45%"
      width="100%">
      <View
        left={-1}
        width={3}
        height={5}
        border={1}
        borderLeftColor="white"
        borderColor="gray.200"
        borderRightRadius={50}
        overflow="hidden"
        bg="trueGray.100"></View>
      {/* <Divider width="80%" borderStyle="dotted" /> */}
      <View
        right={-1}
        width={3}
        height={5}
        border={1}
        borderColor="gray.200"
        borderLeftRadius={50}
        // position="absolute"
        // top="50%"
        // right={-35}
        bg="trueGray.100"></View>
    </HStack>
  );
};
const NormalFlight = ({item, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('FlightDescription', item)}>
      <Box my={1} bg="white" rounded={5} shadow={(1, 0, 0, 1)}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="45%"
          width="100%">
          <View
            left={-1}
            width={3}
            height={5}
            border={1}
            borderLeftColor="white"
            borderColor="gray.200"
            borderRightRadius={50}
            overflow="hidden"
            bg="trueGray.100"></View>
          {/* <Divider width="80%" borderStyle="dotted" /> */}
          <View
            right={-1}
            width={3}
            height={5}
            border={1}
            borderColor="gray.200"
            borderLeftRadius={50}
            // position="absolute"
            // top="50%"
            // right={-35}
            bg="trueGray.100"></View>
        </HStack>
        <VStack p={4} space={4}>
          <HStack space={4} justifyContent="space-between">
            <VStack>
              <Heading fontSize={20} color="blueGray.600">
                {item.departure.charAt(0).toUpperCase() +
                  item.departure.slice(1)}
              </Heading>
              <HStack space={2}>
                <MaterialIcon name="flight-takeoff" size={15} color="gray" />
                <Text fontSize={13}>
                  {item.departureDate.toDate().toLocaleDateString()}
                </Text>
              </HStack>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <HStack alignItems="center" space={2}>
                <Divider width={10} size={3} />
                <Ionicon
                  // name="arrow-forward-circle-outline"
                  name="airplane"
                  size={20}
                  color="gray"
                />
                <Divider width={10} size={3} />
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome name="suitcase" size={13} color="gray" />

                <Text fontSize={13}>54 kg</Text>
              </HStack>
            </VStack>
            <VStack>
              <Heading fontSize={20} color="blueGray.600">
                {item.destination.charAt(0).toUpperCase() +
                  item.destination.slice(1)}
              </Heading>
              <HStack space={2}>
                <MaterialIcon name="flight-land" size={15} color="gray" />
                <Text fontSize={13}>
                  {item.distributionDate.toDate().toLocaleDateString()}
                </Text>
              </HStack>
            </VStack>
          </HStack>

          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Avatar
                bg="blueGray.300"
                _text={{fontSize: 12, color: 'gray.600'}}
                size={8}>
                {item.departure[0]}
              </Avatar>
              <HStack space={1}>
                <Text fontSize="xs">{item.publisher.firstName}</Text>
                <FontAwesome name="check-circle" size={14} color="gray" />
              </HStack>
            </VStack>
            <HStack
              space={5}
              p={2}
              rounded={5}
              border={0.5}
              borderColor="blueGray.500">
              <FontAwesome name="phone" size={16} color="gray" />
              <FontAwesome name="whatsapp" size={16} color="gray" />
              <FontAwesome name="info" size={16} color="gray" />
            </HStack>

            <Heading size="md" color="amber.300">
              {item.pricePerKg} {item.currency} <Text fontSize={12}>/kg</Text>
            </Heading>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

const ReservedFlight = ({navigation, item}) => {
  return (
    <Pressable onPress={() => navigation.navigate('ReservationView', item)}>
      <Box my={1} bg="white" rounded={5} shadow={(1, 0, 0, 1)}>
        <Notch />
        <VStack p={4} space={4}>
          <HStack space={4} justifyContent="space-between">
            <VStack>
              <Heading fontSize={20} color="blueGray.600">
                {item.departure.charAt(0).toUpperCase() +
                  item.departure.slice(1)}
              </Heading>
              <HStack space={2}>
                <MaterialIcon name="flight-takeoff" size={15} color="gray" />
                <Text fontSize={13}>
                  {item.departureDate.toDate().toLocaleDateString()}
                </Text>
              </HStack>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <HStack alignItems="center" space={2}>
                <Divider width={10} size={3} />
                <Ionicon name="airplane" size={20} color="gray" />
                <Divider width={10} size={3} />
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome name="suitcase" size={13} color="gray" />

                <Text fontSize={13}>54 kg</Text>
              </HStack>
            </VStack>
            <VStack>
              <Heading fontSize={20} color="blueGray.600">
                {item.destination.charAt(0).toUpperCase() +
                  item.destination.slice(1)}
              </Heading>
              <HStack space={2}>
                <MaterialIcon name="flight-land" size={15} color="gray" />
                <Text fontSize={13}>
                  {item.distributionDate.toDate().toLocaleDateString()}
                </Text>
              </HStack>
            </VStack>
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" flex={1}>
            <VStack flex={1}>
              <Avatar
                bg="blueGray.300"
                _text={{fontSize: 12, color: 'gray.600'}}
                size={8}>
                {item.departure[0]}
              </Avatar>
              <HStack space={1}>
                <Text fontSize="xs">{item.publisher.firstName}</Text>
                <FontAwesome name="check-circle" size={14} color="gray" />
              </HStack>
            </VStack>
            <HStack
              flex={1}
              space={5}
              p={2}
              rounded={5}
              border={0.5}
              justifyContent="center"
              borderColor="white">
              <Heading size="xs" color="emerald.600">
                Confirmée
              </Heading>
            </HStack>

            <HStack justifyContent="center" flex={1}>
              <Heading size="md" color="amber.300">
                {item.pricePerKg} {item.currency} <Text fontSize={12}>/kg</Text>
              </Heading>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

const Flights = ({item, navigation, type = 'normal'}) => {
  return (
    <View>
      {type === 'reserved' ? (
        <ReservedFlight navigation={navigation} item={item} />
      ) : (
        <NormalFlight navigation={navigation} item={item} />
      )}
    </View>
  );
};
export default Flights;
