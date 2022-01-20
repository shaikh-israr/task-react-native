import React from 'react';
import {View, Text} from 'react-native';
import RootNativation from './src/rootNavigations/RootNativation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootNativation />
    </NavigationContainer>
  );
};

export default App;
