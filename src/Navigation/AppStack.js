import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';
import TicketViewer from '../screens/ProfileViews/TicketViewer';
import FlightDescription from '../Components/Main/FlightDescription';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ticket"
        component={TicketViewer}
        options={{title: 'Réservation AA 1129'}}
      />
      <Stack.Screen
        name="FlightDescription"
        component={FlightDescription}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
