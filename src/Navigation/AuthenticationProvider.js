import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthenticationContext = createContext();

const AuthenticationProvider = ({children}) => {
  const [user, setuser] = useState(null);

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(Object.getOwnPropertyNames(e));
      return e.code;
    }
  };

  const register = async (email, password) => {
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
      return error.code;
    }
  };

  const logOut = () => {
    console.log(`logOut`);
    auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        setuser,
        login,
        register,
        logOut,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export default AuthenticationProvider;
