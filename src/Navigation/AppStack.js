import React from 'react';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Publish from '../screens/Publish';

const Stack = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
          tabBarLabel: 'Acceuil',
          tabBarBadge: 3,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
          tabBarLabel: 'Recherche',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Stack.Screen
        name="Publier"
        component={Publish}
        options={{
          title: 'Publier',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Stack.Screen
        name="flights"
        component={Search}
        options={{
          title: 'Mes colis',
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialIcon name="flight" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profil',
          tabBarIcon: ({focused, color, size}) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
