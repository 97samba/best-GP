import {HStack, VStack, Heading, Input, Button, Text} from 'native-base';
import React, {useContext} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {PublishContext} from '../../screens/Publish';

const Prices = () => {
  const {pricePerKg, setpricePerKg, setpricePerSuitcase, pricePerSuitcase} =
    useContext(PublishContext);

  return (
    <VStack space={2}>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading fontSize={20} my={2} color="blueGray.600">
          Tarifications
        </Heading>
      </HStack>
      <HStack rounded={5} bg="white" alignItems="center" pr={3}>
        <Input
          flex={1}
          value={pricePerKg}
          onChangeText={value => setpricePerKg(value)}
          variant="unstyled"
          placeholder="Prix par kilo"
          InputLeftElement={
            <IonIcon
              name="pricetag"
              size={20}
              color="gray"
              style={{marginLeft: 10}}
            />
          }
        />
        <Text>Prix / Kg</Text>
      </HStack>
      <HStack rounded={5} bg="white" alignItems="center" pr={3}>
        <Input
          flex={1}
          value={pricePerSuitcase}
          onChangeText={value => setpricePerSuitcase(value)}
          rounded={4}
          variant="unstyled"
          bg="white"
          placeholder="Prix par valise"
          InputLeftElement={
            <IonIcon
              name="pricetags-outline"
              size={20}
              color="gray"
              style={{marginLeft: 10}}
            />
          }
        />
        <Text>Prix / Valise</Text>
      </HStack>

      <Button
        bg="blueGray.400"
        _text={{
          color: 'white',
        }}
        my={2}
        size="sm">
        Ajouter une tarification
      </Button>
    </VStack>
  );
};

export default Prices;
