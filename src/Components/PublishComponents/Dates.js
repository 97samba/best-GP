import {
  Box,
  HStack,
  NativeBaseProvider,
  VStack,
  Text,
  Heading,
  Input,
  Button,
  Select,
  ScrollView,
  Center,
} from 'native-base';
import React, {useState, createContext, useContext, useEffect} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {PublishContext} from '../../screens/Publish';

const Dates = () => {
  const {
    departureDate,
    setdepartureDate,
    lastDepot,
    setLastDepot,
    distributionDate,
    setdistributionDate,
  } = useContext(PublishContext);

  const [showDeparture, setshowDeparture] = useState(false);
  const [showArrival, setshowArrival] = useState(false);
  const [showLastDepot, setshowLastDepot] = useState(false);

  const HandleDateChanged = (date, setDate, optionDate, show) => {
    date ? setDate(date) : setDate(optionDate);
    console.log(`date : `, date);
    show(false);
  };

  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Dates
      </Heading>
      {showDeparture && (
        <Center>
          <DateTimePicker
            value={departureDate}
            testID="departurePicker"
            onChange={(e, date) => {
              HandleDateChanged(
                date,
                setdepartureDate,
                departureDate,
                setshowDeparture,
              );
            }}
            mode="datetime"
          />
        </Center>
      )}
      <HStack space={3} bg="white" py={4} rounded={5} alignItems="center">
        <FontAwesome5
          name="calendar-alt"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Box width="80%">
          <TouchableOpacity
            onPress={() => {
              setshowDeparture(true);
            }}>
            <Text color="gray.400">Date de départ</Text>
            <Text>{departureDate && departureDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
      {showLastDepot && (
        <Center>
          <DateTimePicker
            value={lastDepot}
            onChange={(e, date) =>
              HandleDateChanged(date, setLastDepot, lastDepot, setshowLastDepot)
            }
            mode="datetime"
          />
        </Center>
      )}
      <HStack space={3} bg="white" py={4} rounded={5} alignItems="center">
        <FontAwesome5
          name="calendar-times"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Box width="80%">
          <TouchableOpacity onPress={() => setshowLastDepot(true)}>
            <Text color="gray.400">Dernier dépot</Text>
            <Text>{lastDepot && lastDepot.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
      {showArrival && (
        <Center>
          <DateTimePicker
            value={distributionDate}
            onChange={(e, date) =>
              HandleDateChanged(
                date,
                setdistributionDate,
                distributionDate,
                setshowArrival,
              )
            }
            mode="datetime"
          />
        </Center>
      )}
      <HStack space={3} bg="white" py={4} rounded={5} alignItems="center">
        <FontAwesome5
          name="calendar-check"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Box width="80%">
          <TouchableOpacity
            onPress={() => {
              setshowArrival(true);
            }}>
            <Text color="gray.400">Date de distribution</Text>
            <Text>
              {distributionDate && distributionDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    </VStack>
  );
};
export default Dates;
