import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Create from '../screens/Create';
import font from '../constants/font';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#363F5F',
          inactiveTintColor: '#969CB3',
          labelPosition: 'beside-icon',
          labelStyle: {
            fontFamily: font.medium,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="list"
                color={focused ? '#FF872C' : '#969CB3'}
                size={25}
              />
            ),
          }}
          component={Dashboard}
        />
        <Tab.Screen
          name="Cadastrar"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="dollar-sign"
                color={focused ? '#FF872C' : '#969CB3'}
                size={25}
              />
            ),
          }}
          component={Create}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
