import React from 'react';
import {} from './main.styles';
import {createStackNavigator} from '@react-navigation/stack';
import faker from 'faker';
import {v5} from 'uuid';
import HomePage from './pages/home/home.page';

const Stack = createStackNavigator();

const MainApp = () => {
  // const obj = {
  //   id: v5('random', v5.DNS),
  //   latitude: faker.address.latitude(),
  //   longitude: faker.address.latitude(),
  //   img: faker.image.city(),
  // };
  // console.log({...obj});
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {},
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default MainApp;
