import React, {useContext, useState} from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  NativeBaseProvider,
  VStack,
  Text,
  Link,
  HStack,
  FormControl,
} from 'native-base';
import {AuthenticationContext} from '../Navigation/AuthenticationProvider';

const Register = ({navigation}) => {
  const {register} = useContext(AuthenticationContext);
  const [email, setemail] = useState('test@gmail.com');
  const [password1, setpassword1] = useState('testtest');
  const [password2, setpassword2] = useState('testtest');
  const [errorText, seterrorText] = useState();
  const [firstName, setfirstName] = useState('samba');
  const [lastName, setlastName] = useState('NDIAYE');

  const ValidateRegister = async () => {
    seterrorText('');
    if (!(password1 !== '' && password1 === password2 && email)) {
      password1 !== password2 && seterrorText('Mots de passe différents');
      !email && seterrorText('Email requis');
      return;
    }
    const result = await register(email, password1, firstName, lastName);
    seterrorText(result);
  };

  return (
    <NativeBaseProvider>
      <Center pt={15}>
        <Heading>Register</Heading>
        <Text pt={2} color="secondary.600">
          {errorText}
        </Text>
      </Center>
      <VStack>
        <Box px={5}>
          <HStack space={3}>
            <Input
              flex={1}
              isFullWidth
              placeholder="Prénom"
              variant="underlined"
              value={firstName}
              onChangeText={value => setfirstName(value)}
            />
            <Input
              flex={1}
              placeholder="Nom"
              variant="underlined"
              value={lastName}
              onChangeText={value => setlastName(value)}
            />
          </HStack>
          <FormControl>
            <Input
              placeholder="Email"
              variant="underlined"
              value={email}
              onChangeText={value => setemail(value)}
            />
          </FormControl>
          <FormControl pt={2}>
            <Input
              value={password1}
              onChangeText={value => setpassword1(value)}
              placeholder="Mot de Passe"
              secureTextEntry
              variant="underlined"
            />
          </FormControl>
          <FormControl pt={2}>
            <Input
              value={password2}
              onChangeText={value => setpassword2(value)}
              placeholder="Confimer le mot de Passe"
              secureTextEntry
              variant="underlined"
            />
          </FormControl>
        </Box>
        <Center pt={2}>
          <Button size="md" width={150} onPress={ValidateRegister}>
            Créer
          </Button>
        </Center>
        <Center pt={3}>
          <HStack>
            <Text>Vous avez déja un compte,</Text>
            <Link
              onPress={() => navigation.navigate('Login')}
              _text={{color: 'primary.600'}}>
              {' '}
              connectez-vous
            </Link>
          </HStack>
        </Center>
      </VStack>
      <VStack pt={5}>
        <Center>
          <VStack width="80%" space={2}>
            <Button p={4} bg="gray.200">
              S'inscrire via Facebook
            </Button>
            <Button p={4} bg="gray.200">
              S'inscrire via Google
            </Button>
            <Button p={4} bg="gray.200">
              S'inscrire via Apple
            </Button>
          </VStack>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Register;
