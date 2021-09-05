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
import React, {useState, createContext, useContext} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {PublishContext} from '../../screens/Publish';

const Contacts = () => {
  const {
    userName,
    setuserName,
    userFirstName,
    setuserFirstName,
    userPhoneNumber,
    setuserPhoneNumber,
    userPoneNumberPrivacy,
    setuserPoneNumberPrivacy,
  } = useContext(PublishContext);

  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Contacts
      </Heading>
      <Input
        vaue={userFirstName}
        onChangeText={text => setuserFirstName(text)}
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Prénom"
        InputLeftElement={
          <MaterialIcon
            name="person"
            size={20}
            color="gray"
            style={{marginLeft: 10}}
          />
        }
      />
      <Input
        value={userName}
        rounded={4}
        variant="unstyled"
        bg="white"
        onChangeText={value => setuserName(value)}
        placeholder="NOM"
        InputLeftElement={
          <MaterialIcon
            name="person"
            size={20}
            color="gray"
            style={{marginLeft: 10}}
          />
        }
      />
      <Input
        value={userPhoneNumber}
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Mon numéro"
        onChangeText={value => setuserPhoneNumber(value)}
        InputLeftElement={
          <MaterialIcon
            name="call"
            size={20}
            color="gray"
            style={{marginLeft: 10}}
          />
        }
        InputRightElement={
          <Select
            minWidth={160}
            placeholder="Visibilité"
            selectedValue={userPoneNumberPrivacy}
            onValueChange={value => setuserPoneNumberPrivacy(value)}
            borderColor="white">
            <Select.Item label={'Privé'} value="private" />
            <Select.Item label={'Public'} value="public" />
            <Select.Item label={'Me demander'} value="ask" />
            <Select.Item
              _text={{color: 'red.500'}}
              label={'Supprimer'}
              value={0}
            />
          </Select>
        }
      />
      <Button
        bg="blueGray.400"
        _text={{
          color: 'white',
        }}
        my={2}
        size="sm">
        Ajouter un contact
      </Button>
    </VStack>
  );
};

export default Contacts;
