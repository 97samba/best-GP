import {Box, NativeBaseProvider, VStack, Button, ScrollView} from 'native-base';
import React, {useState, createContext, useContext} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Vols from '../Components/PublishComponents/Vols';
import Valises from '../Components/PublishComponents/Valises';
import Prices from '../Components/PublishComponents/Prices';
import DepotRetrait from '../Components/PublishComponents/DepotRetrait';
import Contacts from '../Components/PublishComponents/Contacts';
import Personnalisation from '../Components/PublishComponents/Personnalisation';
import Dates from '../Components/PublishComponents/Dates';

export const PublishContext = createContext();

const MoreButton = () => {
  const {handleSave} = useContext(PublishContext);
  return (
    <VStack>
      <Button
        // variant="unstyled"
        bg="teal.400"
        rounded={0}
        onPress={handleSave}
        startIcon={
          <MaterialIcon
            name="add"
            size={20}
            color="white"
            style={{marginRight: 10}}
          />
        }>
        Publier
      </Button>
    </VStack>
  );
};

const Publish = () => {
  //vols
  const [departure, setdeparture] = useState('dakar');
  const [destination, setdestination] = useState('Paris');

  //dates
  const [departureDate, setdepartureDate] = useState(new Date());
  const [lastDepot, setLastDepot] = useState(new Date());
  const [distributionDate, setdistributionDate] = useState(new Date());

  //Adresses
  const [depotAdresse, setdepotAdresse] = useState('');
  const [retraitAdresse, setretraitAdresse] = useState('');

  //contact
  const [userName, setuserName] = useState('');
  const [userFirstName, setuserFirstName] = useState('');
  const [userPhoneNumber, setuserPhoneNumber] = useState('');
  const [userPoneNumberPrivacy, setuserPoneNumberPrivacy] = useState('public');

  //tarifications
  const [pricePerKg, setpricePerKg] = useState(10);
  const [pricePerSuitcase, setpricePerSuitcase] = useState(200);

  const handleSave = () => {
    console.log(`username`, username);
    console.log(departure);
    console.log(destination);
    console.log(pricePerKg);
    console.log(pricePerSuitcase);
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <PublishContext.Provider
          value={{
            departure,
            setdeparture,
            destination,
            setdestination,
            departureDate,
            setdepartureDate,
            lastDepot,
            setLastDepot,
            distributionDate,
            setdistributionDate,
            depotAdresse,
            setdepotAdresse,
            retraitAdresse,
            setretraitAdresse,
            userName,
            setuserName,
            userFirstName,
            setuserFirstName,
            userPhoneNumber,
            setuserPhoneNumber,
            userPoneNumberPrivacy,
            setuserPoneNumberPrivacy,
            pricePerKg,
            setpricePerKg,
            pricePerSuitcase,
            setpricePerSuitcase,
            handleSave,
          }}>
          <Box flex={1} p={5} color="gray">
            <Vols />
            <Dates />
            <Valises />
            <DepotRetrait />
            <Contacts />
            <Prices />
            <Personnalisation />
          </Box>
          <MoreButton />
        </PublishContext.Provider>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Publish;
