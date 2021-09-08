import {Box, HStack, VStack, Text, Heading, Button, Select} from 'native-base';
import React, {useContext} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PublishContext} from '../../screens/Publish';

const Soute = ({item}) => {
  const {bagages, setBagages} = useContext(PublishContext);

  const handleWeightChange = value => {
    const newState = bagages.map(bagage => {
      if (bagage.key === item.key) {
        return {...bagage, poids: value};
      } else {
        return bagage;
      }
    });
    setBagages(newState);
  };
  return (
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
          selectedValue={item.poids}
          onValueChange={handleWeightChange}
          borderColor="white">
          <Select.Item label={'23 kg'} value={23} />
          <Select.Item label={'32 kg'} value={32} />
          <Select.Item label={'Supprimer'} value={0} />
        </Select>
      </Box>
    </HStack>
  );
};

const Cabine = ({item}) => {
  const {bagages, setBagages} = useContext(PublishContext);

  const handleWeightChange = value => {
    const newState = bagages.map(bagage => {
      if (bagage.key === item.key) {
        return {...bagage, poids: value};
      } else {
        return bagage;
      }
    });
    setBagages(newState);
  };
  return (
    <HStack space={3} bg="white" py={1} rounded={5} alignItems="center">
      <FontAwesome5
        name="suitcase-rolling"
        size={20}
        color="gray"
        style={{marginLeft: 10}}
      />
      <Text flexGrow={1}>Cabine</Text>
      <Box>
        <Select
          minWidth={150}
          placeholder="Poids"
          borderColor="white"
          onValueChange={handleWeightChange}
          selectedValue={item.poids}>
          <Select.Item label={'10 kg'} value={10} />
          <Select.Item label={'12 kg'} value={12} />
          <Select.Item label={'14 kg'} value={14} />
          <Select.Item label={'Supprimer'} value={0} />
        </Select>
      </Box>
    </HStack>
  );
};

const Valises = () => {
  const {bagages} = useContext(PublishContext);
  return (
    <VStack space={2}>
      <Heading fontSize={20} my={2} color="blueGray.600">
        Valises
      </Heading>
      {bagages.map(bagage =>
        bagage.type === 'soute' ? (
          <Soute item={bagage} key={bagage.key} />
        ) : (
          <Cabine item={bagage} key={bagage.key} />
        ),
      )}

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
