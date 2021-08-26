import {
  Box,
  HStack,
  NativeBaseProvider,
  VStack,
  Text,
  Heading,
} from 'native-base';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Publish = () => {
  return (
    <NativeBaseProvider>
      <VStack flex={1}>
        <Box flex={1} bg="primary.100" p={5}>
          <HStack space={2}>
            <MaterialIcon
              name="airplanemode-active"
              size={30}
              color="gray"
              style={{transform: [{rotateX: '180deg'}]}}
            />
            <Heading size="lg" color="blueGray.500">
              Dakar,Sénégal
            </Heading>
          </HStack>
          <HStack space={2}>
            <MaterialIcon
              name="airplanemode-active"
              size={30}
              color="gray"
              style={{transform: [{rotateX: '180deg'}]}}
            />
            <Heading size="lg" color="blueGray.500">
              Dakar,Sénégal
            </Heading>
          </HStack>
        </Box>
        <Box flex={3} p={2} bg="secondary.100"></Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Publish;
