import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NatanaRestauHeader from './components/NatanaRestauHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
    <View style={{flex: 1, backgroundColor: '#495E57',}}>
      <NatanaRestauHeader/>
      <WelcomeScreen/>
    </View>
    <View style={{backgroundColor: '#495E57'}}>
      <Footer/>
    </View>
    </>
  );
}

