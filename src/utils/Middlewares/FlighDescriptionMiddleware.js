import firestore from '@react-native-firebase/firestore';
import {useContext} from 'react';

const verifyArgs = type => {
  return true;
};

export const calculatePricePerKG = (type, weight, pricePerKg) => {
  if (verifyArgs(type)) {
  }

  return weight * pricePerKg;
};

export const makeReservationWeight = async (
  idReservation,
  price,
  weight,
  shipping,
  userID,
) => {
  console.log(`price`, price);
  console.log(`weight`, weight);
  console.log(`shipping`, shipping);
  console.log(`idReservation`, idReservation);
  console.log(`userID`, userID);

  const document = await firestore().collection('users').doc(userID);
  var purchased = (await document.get()).data().purchased;
  if (purchased.includes(idReservation)) {
    console.log(`deja réserver`);
    return;
  }
  purchased.push(idReservation);
  console.log(`purchased`, purchased);
  document.update({purchased: purchased});
};
