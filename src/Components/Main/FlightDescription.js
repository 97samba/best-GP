import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  Select,
  Text,
  VStack,
  ScrollView,
  Radio,
  Checkbox,
} from 'native-base';
import React, {createContext, useContext, useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  calculatePricePerKG,
  makeReservationWeight,
} from '../../utils/Middlewares/FlighDescriptionMiddleware';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {AuthenticationContext} from '../../Navigation/AuthenticationProvider';

const Countries = ({route}) => {
  return (
    <Box>
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
    </Box>
  );
};

const BagageAndQuantity = () => {
  const {
    bagageType,
    setbagageType,
    setweight,
    weight,
    phoneInfomartions,
    setphoneInfomartions,
    suitCaseType,
    setsuitCaseType,
    route,
  } = useContext(ReservationContext);
  const types = [
    {
      value: 'thing',
      label: 'Par kilo',
      startIcon: (
        <MaterialCommunityIcons name="weight-kilogram" size={25} color="gray" />
      ),
    },
    {
      value: 'electronic',
      label: 'Electronique',
      startIcon: <MaterialIcon name="phone-iphone" size={20} color="gray" />,
    },
    {
      value: 'paper',
      label: 'Papier',
      startIcon: <MaterialIcon name="mail" size={20} color="gray" />,
    },
    {
      value: 'suitcase',
      label: 'Valise',
      startIcon: (
        <FontAwesome5Icon name="suitcase-rolling" size={20} color="gray" />
      ),
    },
    {
      value: 'liquid',
      label: 'Liquide',
      startIcon: <MaterialCommunityIcons name="water" size={20} color="gray" />,
    },
    {
      value: 'money',
      label: 'Argent',
      startIcon: <Fontisto name="money-symbol" size={20} color="gray" />,
    },
    {
      value: 'food',
      label: 'Alimentaire',
      startIcon: <IonIcon name="fast-food" size={20} color="gray" />,
    },
  ];
  const PhoneModels = [
    {
      brand: 'Apple',
      models: [
        'Iphone 5',
        'Iphone 6, plus',
        'Iphone 7, plus',
        'Iphone 8, plus',
        'Iphone x',
        'Iphone xs, max',
        'Iphone 11, pro, max',
        'Iphone 12, pro, max',
        'autre',
      ],
    },
    {
      brand: 'Samsung',
      models: ['s5', 's6, plus', 's7, plus', 's8, plus', 'autre'],
    },
    {
      brand: 'Autre',
      models: ['autre'],
    },
  ];

  const bagagesSize = [
    {
      type: 'soute',
      label: 'Soute',
      unity: 'kg',
      poids: [8, 10, 12],
    },
    {
      type: 'cabine',
      label: 'Cabine',
      unity: 'kg',
      poids: [23, 32],
    },
  ];

  const liquids = [
    {
      type: 'parfum',
      label: 'Parfum',
      unity: 'ml',
      sizes: [15, 25, 30, 40, 50, 75, 100, 200, 400],
    },
    {
      type: 'alimentaire',
      label: 'Alimentaire',
      unity: 'ml',
      sizes: [15, 25, 30, 40, 50, 75, 100, 200, 400],
    },
    {
      type: 'autre',
      label: 'Autre',
      unity: 'ml',
      sizes: [15, 25, 30, 40, 50, 75, 100, 200, 400],
    },
  ];
  const renderTypes = () => {
    switch (bagageType) {
      case 'thing':
        return (
          <Box>
            <Heading size="sm" fontWeight="400" color="trueGray.400" mt="1">
              Poids
            </Heading>
            <Input
              variant="outline"
              placeholder="en kg"
              value={weight}
              onChangeText={value => setweight(value)}
            />
          </Box>
        );
      case 'electronic':
        return (
          <Box>
            <Heading size="sm" fontWeight="400" color="trueGray.400" mt="1">
              Informations
            </Heading>
            <HStack justifyContent="space-between" alignItems="center" mt={2}>
              <Select
                width="50%"
                placeholder="Marque"
                selectedValue={phoneInfomartions.brand}
                onValueChange={value =>
                  setphoneInfomartions({...phoneInfomartions, brand: value})
                }>
                {PhoneModels.map((brand, index) => (
                  <Select.Item
                    label={brand.brand}
                    key={index}
                    value={brand.brand}
                  />
                ))}
              </Select>
              <Select placeholder="Modéle" width="50%">
                {PhoneModels.filter(
                  model => model.brand === phoneInfomartions.brand,
                ).map(brand => {
                  return brand.models.map((model, index) => (
                    <Select.Item label={model} key={index} />
                  ));
                })}
              </Select>
            </HStack>
          </Box>
        );
      case 'liquid':
        return (
          <Box>
            <Heading size="sm" fontWeight="400" color="trueGray.400" mt="1">
              Informations
            </Heading>
            <HStack justifyContent="space-between" alignItems="center" mt={2}>
              <Select
                width="50%"
                placeholder="Type"
                selectedValue={phoneInfomartions.brand}
                onValueChange={value =>
                  setphoneInfomartions({...phoneInfomartions, brand: value})
                }>
                {liquids.map((liquid, index) => (
                  <Select.Item
                    label={liquid.label}
                    key={index}
                    value={liquid.type}
                  />
                ))}
              </Select>
              <Select placeholder="Quantité" width="50%">
                {liquids
                  .filter(model => model.brand === phoneInfomartions.brand)
                  .map(brand => {
                    return brand.models.map((model, index) => (
                      <Select.Item label={model} key={index} />
                    ));
                  })}
              </Select>
            </HStack>
          </Box>
        );
      case 'suitcase':
        return (
          <Box>
            <Heading size="sm" fontWeight="400" color="trueGray.400" mt="1">
              Informations
            </Heading>
            <HStack justifyContent="space-between" alignItems="center" mt={2}>
              <Select
                width="50%"
                placeholder="Type"
                selectedValue={phoneInfomartions.brand}
                onValueChange={value =>
                  setphoneInfomartions({...phoneInfomartions, brand: value})
                }>
                {bagagesSize.map((bagage, index) => (
                  <Select.Item
                    label={bagage.label}
                    value={bagage.type}
                    key={index}
                  />
                ))}
              </Select>
              <Select
                onValueChange={value => setsuitCaseType(value)}
                placeholder="Poids"
                width="50%"
                selectedValue={suitCaseType}>
                {bagagesSize
                  .filter(bagage => bagage.type === suitCaseType)
                  .map(brand => {
                    return brand.poids.map((poids, index) => (
                      <Select.Item
                        label={poids + ' ' + brand.unity}
                        value={poids}
                        key={index}
                      />
                    ));
                  })}
              </Select>
            </HStack>
          </Box>
        );
        c;
      default:
        return <Text>default</Text>;
    }
  };

  const getPrice = type => {};

  return (
    <VStack space={1} mt={4}>
      <Heading size="sm" fontWeight="400" color="trueGray.400">
        Bagages et Quantité
      </Heading>

      <HStack alignItems="center" justifyContent="space-between">
        <Select
          selectedValue={bagageType}
          placeholder="Type"
          defaultValue="thing"
          minWidth="70%"
          onValueChange={value => setbagageType(value)}>
          {types.map((type, index) => (
            <Select.Item
              value={type.value}
              label={type.label}
              startIcon={type.startIcon}
              key={index}
            />
          ))}
        </Select>
        <VStack space={2} justifyContent="center">
          <HStack justifyContent="center" space={2} alignItems="flex-end">
            <Heading color="blueGray.500" size="lg">
              {route.params.pricePerKg} €
            </Heading>
            <Heading size="sm" color="gray.400">
              / kg
            </Heading>
          </HStack>
          <Divider orientation="horizontal" size={2} />
        </VStack>
      </HStack>
      <Box>{renderTypes()}</Box>
    </VStack>
  );
};

const Dates = ({route}) => {
  return (
    <HStack mt={4} justifyContent="space-between">
      <VStack space={1}>
        <Heading size="sm" fontWeight="400" color="trueGray.400">
          Dernier Dépot
        </Heading>
        <HStack alignItems="center" space={2}>
          <FontAwesome5Icon name="calendar-check" size={20} color="gray" />
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
          <FontAwesome5Icon name="calendar-times" size={20} color="gray" />
          <Heading size="sm" color="gray.500">
            {route.params.distributionDate.toDate().toLocaleDateString()}
          </Heading>
        </HStack>
        <Divider mt={2} size={2} />
      </VStack>
    </HStack>
  );
};

const PaymentType = () => {
  const {paymentMethod, setpaymentMethod, shipping, setshipping} =
    useContext(ReservationContext);
  return (
    <VStack mt={2} space={1}>
      <Heading size="sm" fontWeight="400" color="trueGray.400">
        Méthode de paiement
      </Heading>
      <Radio.Group
        value={paymentMethod}
        onChange={value => setpaymentMethod(value)}>
        <Radio value="money">Espéces</Radio>
        <Radio value="cart" mt={1}>
          Carte bancaire
        </Radio>
        <Radio value="transfert" mt={1}>
          Transfert (Wave, Orange Money ...)
        </Radio>
      </Radio.Group>
      <Heading size="sm" fontWeight="400" mt={2} color="trueGray.400">
        Livraison
      </Heading>
      <HStack mt={2}>
        <Checkbox isChecked={shipping} onChange={value => setshipping(value)}>
          Livraison partout à Dakar pour 2 euros
        </Checkbox>
      </HStack>
    </VStack>
  );
};

export const ReservationContext = createContext();

const FlightDescription = ({navigation, route}) => {
  const [bagageType, setbagageType] = useState('thing');
  const [weight, setweight] = useState('1');
  const [phoneInfomartions, setphoneInfomartions] = useState({
    brand: 'Apple',
    model: 'Iphone 12',
  });
  const [suitCaseType, setsuitCaseType] = useState('soute');
  const [liquidType, setliquidType] = useState('parfum');
  const [moneyCurrency, setmoneyCurrency] = useState('euro');
  const [money, setmoney] = useState();

  //livraison
  const [shipping, setshipping] = useState(true);

  //paiement
  const [paymentMethod, setpaymentMethod] = useState('money');

  const {user} = useContext(AuthenticationContext);

  const makeReservation = type => {
    makeReservationWeight(
      route.params.id,
      route.params.pricePerKg,
      weight,
      shipping,
      user.uid,
    );
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box bg="blueGray.300" flex={1}>
          <Box bg="white" flex={1} p={5}>
            <ReservationContext.Provider
              value={{
                phoneInfomartions,
                setphoneInfomartions,
                bagageType,
                setbagageType,
                weight,
                setweight,
                suitCaseType,
                setsuitCaseType,
                liquidType,
                setliquidType,
                moneyCurrency,
                setmoneyCurrency,
                money,
                setmoney,
                route,
                shipping,
                setshipping,
                paymentMethod,
                setpaymentMethod,
              }}>
              <Countries route={route} />
              <Dates route={route} />
              <BagageAndQuantity />
              <PaymentType />
            </ReservationContext.Provider>

            <VStack flexGrow={1} space={1} mt={4}></VStack>

            <Center>
              <Button
                width="100%"
                color="blueGray.300"
                size="lg"
                onPress={makeReservation}>
                <HStack space={2}>
                  <Text color="white">Reserver</Text>
                  <Text color="white">
                    {calculatePricePerKG(
                      'weight',
                      weight,
                      route.params.pricePerKg,
                    ) + ' €'}
                  </Text>
                </HStack>
              </Button>
            </Center>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FlightDescription;
