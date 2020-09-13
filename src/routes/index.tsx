import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Create from '../screens/Create';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Listagem"
          options={{
            tabBarIcon: () => <Icon name="list" color="#FF872C" size={25} />,
          }}
          component={Dashboard}
        />
        <Tab.Screen
          name="Cadastrar"
          options={{
            tabBarIcon: () => (
              <Icon name="dollar-sign" color="#FF872C" size={25} />
            ),
          }}
          component={Create}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
