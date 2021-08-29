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
import React, {useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Vol = () => {
  return (
    <VStack space={2}>
      <Heading fontSize={20} pb={2} color="blueGray.600">
        Vol
      </Heading>
      <Input
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Départ"
        InputLeftElement={
          <MaterialIcon
            name="flight-takeoff"
            size={20}
            color="gray"
            style={{marginLeft: 10}}
          />
        }
      />
      <Input
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Destination"
        InputLeftElement={
          <MaterialIcon
            name="flight-land"
            size={20}
            color="gray"
            style={{marginLeft: 10}}
          />
        }
      />
    </VStack>
  );
};

const Valises = () => {
  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Valises
      </Heading>

      <HStack space={3} bg="white" py={1} rounded={5} alignItems="center">
        <FontAwesome5
          name="suitcase"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Text flexGrow={1}>Soute</Text>
        <Box>
          <Select
            minWidth={150}
            height={45}
            placeholder="Poids"
            borderColor="white">
            <Select.Item label={'23 kg'} value={23} />
            <Select.Item label={'32 kg'} value={32} />
            <Select.Item label={'Supprimer'} value={0} />
          </Select>
        </Box>
      </HStack>

      <HStack space={3} bg="white" py={1} rounded={5} alignItems="center">
        <FontAwesome5
          name="suitcase-rolling"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Text flexGrow={1}>Cabine</Text>
        <Box>
          <Select minWidth={150} placeholder="Poids" borderColor="white">
            <Select.Item label={'10 kg'} value={10} />
            <Select.Item label={'12 kg'} value={12} />
            <Select.Item label={'14 kg'} value={14} />
            <Select.Item label={'Supprimer'} value={0} />
          </Select>
        </Box>
      </HStack>

      <Button
        bg="blueGray.400"
        _text={{
          color: 'white',
        }}
        my={2}
        size="sm">
        Ajouter une valise
      </Button>
    </VStack>
  );
};

const Dates = () => {
  const [dateDeparture, setdateDeparture] = useState(new Date());
  const [showDeparture, setshowDeparture] = useState(false);
  const [dateArrival, setdateArrival] = useState(new Date());
  const [showArrival, setshowArrival] = useState(false);

  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Dates
      </Heading>
      {showDeparture && (
        <Center>
          <DateTimePicker value={dateDeparture} mode="datetime" />
        </Center>
      )}
      <HStack space={3} bg="white" py={4} rounded={5}>
        <FontAwesome5
          name="calendar-alt"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Box width="80%">
          <TouchableOpacity onPress={() => setshowArrival(true)}>
            <Text color="gray.400">Date de départ</Text>
            {/* <Text>{dateDeparture.toLocaleDateString()}</Text> */}
          </TouchableOpacity>
        </Box>
      </HStack>
      {showArrival && (
        <Center>
          <DateTimePicker value={dateArrival} mode="datetime" />
        </Center>
      )}
      <HStack space={3} bg="white" py={4} rounded={5}>
        <FontAwesome5
          name="calendar-times"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Box width="80%">
          <TouchableOpacity onPress={() => setshowDeparture(true)}>
            <Text color="gray.400">Dernier dépot</Text>
            {/* <Text>{dateArrival.toLocaleDateString()}</Text> */}
          </TouchableOpacity>
        </Box>
      </HStack>
      <HStack space={3} bg="white" py={4} rounded={5}>
        <FontAwesome5
          name="calendar-check"
          size={20}
          color="gray"
          style={{marginLeft: 10}}
        />
        <Box width="80%">
          <TouchableOpacity onPress={() => setshowDeparture(true)}>
            <Text color="gray.400">Date de distribution</Text>
            {/* <Text>{dateArrival.toLocaleDateString()}</Text> */}
          </TouchableOpacity>
        </Box>
      </HStack>
    </VStack>
  );
};

const Contacts = () => {
  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Contacts
      </Heading>
      <Input
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Prénom NOM"
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
        rounded={4}
        variant="unstyled"
        bg="white"
        placeholder="Mon numéro"
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
            selectedValue="public"
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

const DepotRetrait = () => {
  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Dépot - Retrait
      </Heading>
      <Input
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

const MoreButton = () => {
  return (
    <VStack>
      <Button
        // variant="unstyled"
        bg="teal.400"
        rounded={0}
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
const Prices = () => {
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
const Personnalisation = () => {
  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Personalisations
      </Heading>

      <Button
        bg="blueGray.400"
        _text={{
          color: 'white',
        }}
        my={2}
        size="sm">
        Plus de Personnalisations
      </Button>
    </VStack>
  );
};

const Publish = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box flex={1} p={5} color="gray">
          <Vol />
          <Dates />
          <Valises />
          <DepotRetrait />
          <Contacts />
          <Prices />
          <Personnalisation />
        </Box>
        <MoreButton />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Publish;
