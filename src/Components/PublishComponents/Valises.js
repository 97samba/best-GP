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
export default Valises;
