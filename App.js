import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NatanaRestauHeader from './components/NatanaRestauHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import RenderSectionList from './components/RenderSectionList';
import FeedBackForm from './components/FeedBackForm';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <NatanaRestauHeader/>
      {/* <WelcomeScreen/> */}
      {/* <MenuItems/> */}
      <RenderSectionList/>
      {/* <FeedBackForm/> */}
    </View>
    <View style={{backgroundColor: '#495E57'}}>
      <Footer/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  }
})