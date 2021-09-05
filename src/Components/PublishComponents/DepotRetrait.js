import {VStack, Text, Heading, Input, Button} from 'native-base';
import React, {useState, createContext, useContext} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PublishContext} from '../../screens/Publish';

const DepotRetrait = () => {
  const {depotAdresse, setdepotAdresse, retraitAdresse, setretraitAdresse} =
    useContext(PublishContext);

  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Dépot - Retrait
      </Heading>
      <Input
        value={depotAdresse}
        onChangeText={value => setdepotAdresse(value)}
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Adresse dépot"
        InputLeftElement={
          <MaterialCommunityIcons
            name="package-variant-closed"
            size={20}
            color="gray"
            style={{marginLeft: 10}}
          />
        }
      />
      <Input
        value={retraitAdresse}
        onChangeText={value => setretraitAdresse(value)}
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Adresse retrait"
        InputLeftElement={
          <MaterialCommunityIcons
            name="package-variant"
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
        Ajouter une adresse
      </Button>
    </VStack>
  );
};

export default DepotRetrait;
