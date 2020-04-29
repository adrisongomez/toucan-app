import React from 'react';
import {} from './main.styles';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/home/home.page';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {},
        cardStyle: {
          // backgroundColor: 'rgb(245,246,245)',
          // backgroundColor: 'red',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default MainApp;
