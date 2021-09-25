import {
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  Select,
  Modal,
  Pressable,
  Text,
} from 'native-base';
import React, {useContext, useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {PublishContext} from '../../screens/Publish';

const ContactAdder = ({isOpen, setIsOpen, addContact}) => {
  const [state, setstate] = useState({
    firstName: '',
    lastName: '',
    role: 'distribution',
    userPhoneNumber: '',
  });
  return (
    <VStack>
      <Button
        onPress={() => setIsOpen(true)}
        bg="blueGray.400"
        _text={{
          color: 'white',
        }}
        my={2}
        size="sm">
        Ajouter un contact
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Ajouter un contact</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center">
                <Heading size="sm" flexGrow={1}>
                  Rôle :{' '}
                </Heading>
                <Pressable
                  onPress={() => setstate({...state, role: 'distribution'})}>
                  <HStack
                    space={2}
                    bg={state.role === 'distribution' ? 'blueGray.300' : null}
                    p={2}
                    rounded={5}
                    mx={2}>
                    <MaterialCommunityIcons
                      name="package-up"
                      size={20}
                      color="gray"
                    />
                    <Text>Distributeur</Text>
                  </HStack>
                </Pressable>

                <Pressable
                  onPress={() => setstate({...state, role: 'reciever'})}>
                  <HStack
                    borderRadius={5}
                    space={2}
                    p={2}
                    mx={2}
                    bg={state.role === 'reciever' ? 'blueGray.300' : null}>
                    <MaterialCommunityIcons
                      name="package-down"
                      size={20}
                      color="gray"
                    />
                    <Text>Receveur</Text>
                  </HStack>
                </Pressable>
              </HStack>
            </VStack>

            <VStack space={2} mt={2}>
              <Input
                // value={userFirstName}
                // onChangeText={text => setuserFirstName(text)}
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
                // value={userName}
                rounded={4}
                variant="unstyled"
                bg="white"
                // onChangeText={value => setuserName(value)}
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
                // value={userPhoneNumber}
                rounded={4}
                variant="unstyled"
                bg="white"
                placeholder="Mon numéro"
                // onChangeText={value => setuserPhoneNumber(value)}
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
                    // selectedValue={userPoneNumberPrivacy}
                    // onValueChange={value => setuserPoneNumberPrivacy(value)}
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
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              size="sm"
              bg="blueGray.400"
              onPress={() => {
                setIsOpen(false);
              }}>
              Valider
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </VStack>
  );
};

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

  const [isOpen, setisOpen] = useState(false);
  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Contacts
      </Heading>
      <Input
        value={userFirstName}
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
      <ContactAdder isOpen={isOpen} setIsOpen={setisOpen} />
    </VStack>
  );
};

export default Contacts;
