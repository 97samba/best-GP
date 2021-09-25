import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({children}) => {
  const [user, setuser] = useState(null);

  const login = async (email, password) => {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('user ', res.user);
        });
    } catch (e) {
      console.log(Object.getOwnPropertyNames(e));
      return e.code;
    }
  };
  const createUserDocument = async (uid, firstName, lastName) => {
    const infos = {
      firstName: firstName,
      lastName: lastName,
      favoriteFlights: [],
      publishedFlights: [],
      purchased: [],
    };
    await firestore()
      .collection('users')
      .doc(uid)
      .set(infos)
      .then(console.log('Les informations ont été crées'));
  };

  const register = async (email, password, firstName, lastName) => {
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('User account created & signed in!', res.user);

          res.user.updateProfile({
            displayName: firstName + ' ' + lastName,
          });

          createUserDocument(res.user.uid, firstName, lastName);
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
