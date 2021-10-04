import firestore from '@react-native-firebase/firestore';

const applyPromocode = ({promoCode}) => {};

const completSearch = async (departure, destination) => {
  const results = await firestore()
    .collection('flights')
    .where('departure', '==', departure)
    .where('destination', '==', destination)
    .get()
    .then(query => {
      return query.docs;
    });
  return results;
};
const searchDepartureOrDestinationOnly = async (label, search) => {
  const results = await firestore()
    .collection('flights')
    .where(label, '==', search)
    .get()
    .then(query => {
      return query.docs;
    });
  return results;
};

export const findResults = async (
  departure,
  destination,
  date,
  type,
  promoCode,
) => {
  console.log(`departure`, departure);
  console.log(`destination`, destination);
  if (departure == '' || destination == '') {
    if (departure) {
      return searchDepartureOrDestinationOnly('departure', departure);
    }
    return searchDepartureOrDestinationOnly('destination', destination);
  }
  return completSearch(departure, destination);
};
