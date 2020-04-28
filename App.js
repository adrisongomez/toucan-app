import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './src/main';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
