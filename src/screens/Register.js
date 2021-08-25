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
  const [email, setemail] = useState('test');
  const [password1, setpassword1] = useState('test');
  const [password2, setpassword2] = useState('test');
  const [errorText, seterrorText] = useState();

  const ValidateRegister = async () => {
    seterrorText('');
    if (!(password1 !== '' && password1 === password2 && email)) {
      password1 !== password2 && seterrorText('Mots de passe différents');
      !email && seterrorText('Email requis');
      return;
    }
    const result = await register(email, password1);
    seterrorText(result);
  };

  return (
    <NativeBaseProvider>
      <Center pt={15}>
        <Heading>Register</Heading>
        <Text pt={5} color="secondary.600">
          {errorText}
        </Text>
      </Center>
      <VStack>
        <Box p={5}>
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
        <Center pt={5}>
          <Button size="lg" width={150} onPress={ValidateRegister}>
            Créer
          </Button>
        </Center>
        <Center pt={5}>
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
      <VStack pt={10}>
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
