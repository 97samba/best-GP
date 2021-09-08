import {HStack, VStack, Heading, Input, Button} from 'native-base';
import React, {useContext, useEffect} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity} from 'react-native';
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
        <TouchableOpacity>
          <HStack alignItems="center" space={2}>
            <Heading fontSize={14} color="blueGray.600">
              {' '}
              ( + 1 € sur le prix final)
            </Heading>
            <MaterialIcon name="info" size={14} color="gray" />
          </HStack>
        </TouchableOpacity>
      </HStack>
      <Input
        value={pricePerKg}
        onChangeText={value => setpricePerKg(value)}
        rounded={4}
        variant="unstyled"
        bg="white"
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
      <Input
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
