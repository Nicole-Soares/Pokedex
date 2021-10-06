import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import Navegacion from './src/navegacion/Navegacion';

export default function App() {
  return (
    <NavigationContainer>
     
        <Navegacion />
      
    </NavigationContainer>
  );
}
