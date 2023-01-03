import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NatanaRestauHeader from './components/NatanaRestauHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import RenderSectionList from './components/RenderSectionList';
import LoginScreen from './components/LoginScreen';
import FeedBackForm from './components/FeedBackForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <NatanaRestauHeader/>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
        {/* <MenuItems/> */}
        {/* <RenderSectionList/> */}
        {/* <FeedBackForm/> */}

      </View>
      <View style={{backgroundColor: '#495E57'}}>
        <Footer/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  }
})