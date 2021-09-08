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

const Flights = ({item, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('FlightDescription', item)}>
      <Box mt={2} bg="white" rounded={5} shadow={(1, 0, 0, 1)}>
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
        <VStack p={5} space={4}>
          <HStack space={4} justifyContent="space-between">
            <VStack>
              <Heading fontSize={20} color="blueGray.600">
                {item.departure}
              </Heading>
              <HStack space={2}>
                <MaterialIcon name="flight-takeoff" size={15} color="gray" />
                <Text fontSize={13}>
                  {/* {item.departureDate.toDate().toLocaleDateString()} */}
                </Text>
              </HStack>
            </VStack>
            <VStack justifyContent="center" alignItems="center">
              <HStack alignItems="center" space={2}>
                <Divider width={10} size={3} />
                <Ionicon
                  name="arrow-forward-circle-outline"
                  size={25}
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
                {item.destination}
              </Heading>
              <HStack space={2}>
                <MaterialIcon name="flight-land" size={15} color="gray" />
                <Text fontSize={13}>
                  {/* {item.distributionDate.toDate().toLocaleDateString('en-US', {
                  weekday: 'long', year: 'numeric', month: 'long', day:
                  'numeric', })} */}
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
                {`${item.publisher.firsName[0]} ${item.publisher.lastName[0]}`}
              </Avatar>
              <HStack space={1}>
                <Text fontSize="xs">{item.publisher.firsName}</Text>
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
export default Flights;
