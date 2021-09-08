import {Box, NativeBaseProvider, VStack, Button, ScrollView} from 'native-base';
import React, {useState, createContext, useContext, useEffect} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Vols from '../Components/PublishComponents/Vols';
import Valises from '../Components/PublishComponents/Valises';
import Prices from '../Components/PublishComponents/Prices';
import DepotRetrait from '../Components/PublishComponents/DepotRetrait';
import Contacts from '../Components/PublishComponents/Contacts';
import Personnalisation from '../Components/PublishComponents/Personnalisation';
import Dates from '../Components/PublishComponents/Dates';
import {ValidateFlight} from '../utils/Middlewares/PublishMiddleware';
import Firestore from '@react-native-firebase/firestore';
import {AuthenticationContext} from '../Navigation/AuthenticationProvider';

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
  const {user} = useContext(AuthenticationContext);
  //vols
  const [departure, setdeparture] = useState('dakar');
  const [destination, setdestination] = useState('Paris');

  //dates
  const [departureDate, setdepartureDate] = useState(new Date());
  const [lastDepot, setLastDepot] = useState(new Date());
  const [distributionDate, setdistributionDate] = useState(new Date());

  //Valises
  const [bagages, setBagages] = useState([
    {
      type: 'soute',
      poids: 32,
      unite: 'kg',
      key: 1,
    },
    {
      type: 'cabine',
      poids: 12,
      unite: 'kg',
      key: 2,
    },
  ]);

  //Adresses
  const [depotAdresse, setdepotAdresse] = useState('Cité Sonatel 1,Dakar');
  const [retraitAdresse, setretraitAdresse] = useState(
    'Barbes Rochechoir, Paris 18',
  );

  //contact
  const [userName, setuserName] = useState('NDIAYE');
  const [userFirstName, setuserFirstName] = useState('Samba');
  const [userPhoneNumber, setuserPhoneNumber] = useState('0612345687');
  const [userPoneNumberPrivacy, setuserPoneNumberPrivacy] = useState('public');

  //tarifications
  const [pricePerKg, setpricePerKg] = useState(10);
  const [pricePerSuitcase, setpricePerSuitcase] = useState(200);

  const handleSave = () => {
    //verify vol
    const validation = ValidateFlight(departure, destination);
    console.log(`validation vol `, validation);
    publishItem();
    //verify dates
    //verify valises
    //verify depot
    //verify contact
    //verify price
  };

  const publishItem = async () => {
    const item = {
      publisher: {
        firstName: userFirstName,
        lastName: userName,
        id: user.uid,
        phone: userPhoneNumber,
      },
      departure: departure,
      destination: destination,
      departureDate: departureDate,
      distributionDate: distributionDate,
      lastDepot: lastDepot,
      valise: bagages,
      depotAdresse: depotAdresse,
      retraitAdresse: retraitAdresse,
      pricePerKg: pricePerKg,
      pricePerSuitcase: pricePerSuitcase,
    };
    console.log(`item`, item);
    await Firestore()
      .collection('flights')
      .add(item)
      .then(() => console.log('finish adding item'));
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
            bagages,
            setBagages,
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
