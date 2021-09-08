import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  NativeBaseProvider,
  Select,
  VStack,
} from 'native-base';
import React, {useEffect} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FlightDescription = ({navigation, route}) => {
  return (
    <NativeBaseProvider>
      {/* <ScrollView flex={1}> */}
      <Box bg="blueGray.300" flex={1}>
        <Box bg="blueGray.300" p={5} flex={1}>
          <Heading color="blueGray.500" fontWeight={400} fontSize={25}>
            Des kilos,
          </Heading>
          <Heading color="blueGray.500" fontSize={25}>
            Une valise ?
          </Heading>
        </Box>
        <Box
          bg="white"
          p={5}
          flex={3}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}>
          <HStack justifyContent="space-between">
            <Heading size="sm" fontWeight="400" color="trueGray.400">
              Départ
            </Heading>
            <Heading size="sm" fontWeight="400" color="trueGray.400">
              Destination
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Heading color="blueGray.500" size="xl">
                {route.params.departure}
              </Heading>

              <Divider mt={2} size={2} />
            </VStack>

            <MaterialIcon name="flight-takeoff" size={35} color="gold" />
            <VStack>
              <Heading color="blueGray.500" size="xl">
                {route.params.destination}
              </Heading>

              <Divider mt={2} size={2} />
            </VStack>
          </HStack>
          <HStack mt={4} justifyContent="space-between">
            <VStack space={1}>
              <Heading size="sm" fontWeight="400" color="trueGray.400">
                Dernier Dépot
              </Heading>
              <HStack alignItems="center" space={2}>
                <FontAwesome5Icon
                  name="calendar-check"
                  size={20}
                  color="gray"
                />
                <Heading size="sm" color="gray.500">
                  {route.params.departureDate.toDate().toLocaleDateString()}
                </Heading>
              </HStack>
              <Divider mt={2} size={2} />
            </VStack>
            <VStack space={1}>
              <Heading
                size="sm"
                fontWeight="400"
                color="trueGray.400"
                textAlign="right">
                Distribution
              </Heading>
              <HStack alignItems="center" space={2}>
                <FontAwesome5Icon
                  name="calendar-times"
                  size={20}
                  color="gray"
                />
                <Heading size="sm" color="gray.500">
                  {route.params.distributionDate.toDate().toLocaleDateString()}
                </Heading>
              </HStack>
              <Divider mt={2} size={2} />
            </VStack>
          </HStack>
          <VStack space={1} mt={4}>
            <Heading size="sm" fontWeight="400" color="trueGray.400">
              Bagages et Quantité
            </Heading>

            <HStack alignItems="center" space={2}>
              {/* <Text>Type : </Text> */}
              <Select placeholder="Type" defaultValue="thing" minWidth="100%">
                <Select.Item
                  value="thing"
                  label="Par kilo"
                  startIcon={
                    <MaterialCommunityIcons
                      name="weight-kilogram"
                      size={25}
                      color="gray"
                    />
                  }
                />
                <Select.Item
                  value="electronic"
                  label="Electronic"
                  startIcon={
                    <MaterialIcon name="phone-iphone" size={20} color="gray" />
                  }
                />
                <Select.Item
                  value="paper"
                  label="Papier"
                  startIcon={
                    <MaterialIcon name="mail" size={20} color="gray" />
                  }
                />
                <Select.Item
                  value="suitcase"
                  label="Valise"
                  startIcon={
                    <FontAwesome5Icon
                      name="suitcase-rolling"
                      size={20}
                      color="gray"
                    />
                  }
                />
                <Select.Item
                  value="liquid"
                  label="Liquide"
                  startIcon={
                    <MaterialIcon name="water" size={20} color="gray" />
                  }
                />
                <Select.Item
                  value="money"
                  label="Argent"
                  startIcon={
                    <Ionicons name="attach-money" size={20} color="gray" />
                  }
                />
              </Select>
            </HStack>
          </VStack>
          <VStack flexGrow={1} space={1} mt={4}>
            {/* <HStack alignItems="center" space={1}>
              <Heading size="sm" fontWeight="400" color="trueGray.400">
                Colis non accepté(s)
              </Heading>
              <MaterialIcon name="cancel" size={20} color="tomato" />
            </HStack>
            <HStack>
              <VStack>
                <HStack alignItems="center" space={2}>
                  <Ionicons name="water" size={20} color="gray" />
                  <Heading size="md" fontWeight="400">
                    Liquide
                  </Heading>
                </HStack>
                <Divider size={2} mt={1} />
              </VStack>
            </HStack> */}
          </VStack>

          <Center>
            <Button width="100%" color="blueGray.300" size="lg">
              Reserver
            </Button>
          </Center>
        </Box>
      </Box>
      {/* </ScrollView> */}
    </NativeBaseProvider>
  );
};

export default FlightDescription;
