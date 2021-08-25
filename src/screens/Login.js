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

const Login = ({navigation}) => {
  const {login} = useContext(AuthenticationContext);
  const [email, setemail] = useState('test');
  const [password, setpassword] = useState('password');
  const [errorText, seterrorText] = useState('');

  const validateLogin = async () => {
    if (!email || !password) return;
    const error = await login(email, password);
    seterrorText(error);
  };
  return (
    <NativeBaseProvider>
      <Center pt={20}>
        <Heading>Login</Heading>
      </Center>
      <VStack>
        <Center>
          <Text pt={5} color="secondary.600">
            {errorText}
          </Text>
        </Center>
        <Box p={5}>
          <FormControl>
            <Input
              placeholder="Email"
              variant="underlined"
              value={email}
              isRequired
              onChangeText={value => setemail(value)}
            />
          </FormControl>
          <FormControl pt={2} isRequired>
            <Input
              value={password}
              placeholder="Mot de Passe"
              secureTextEntry
              variant="underlined"
              onChangeText={value => setpassword(value)}
            />
          </FormControl>
        </Box>
        <Center pt={5}>
          <Button size="lg" width={150} onPress={validateLogin}>
            Login
          </Button>
        </Center>
        <Center pt={5}>
          <HStack>
            <Text>Vous n'avez pas de compte,</Text>
            <Link
              onPress={() => navigation.navigate('Register')}
              _text={{color: 'primary.600'}}>
              {' '}
              créer
            </Link>
          </HStack>
        </Center>
      </VStack>
      <VStack pt={10}>
        <Center>
          <VStack width="80%" space={2}>
            <Button p={4} bg="gray.200">
              Se connecter via Facebook
            </Button>
            <Button p={4} bg="gray.200">
              Se connecter via Google
            </Button>
          </VStack>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Login;
