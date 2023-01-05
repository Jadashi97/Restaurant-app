import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import NatanaRestauHeader from './components/NatanaRestauHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import RenderSectionList from './components/RenderSectionList';
import LoginScreen from './components/LoginScreen';
import FeedBackForm from './components/FeedBackForm';

const Stack = createNativeStackNavigator(); //we are getting this from the native-stack
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    ////// THIS IS FOR THE STACK NAVIGATOR //////////////

    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <NatanaRestauHeader/>
    //     <Stack.Navigator 
    //       initialRouteName='Login'
    //       screenOptions={{headerStyle: {backgroundColor: '#FBDABB'}}}  
    //     >
    //       <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    //       <Stack.Screen name="Login" component={LoginScreen}/>
    //       <Stack.Screen name="Menu" component={MenuItems}/>
    //       <Stack.Screen name="SectionList" component={RenderSectionList}/>
    //     </Stack.Navigator>
    //     {/* <MenuItems/> */}
    //     {/* <RenderSectionList/> */}
    //     {/* <FeedBackForm/> */}

    //   </View>
    //   <View style={{backgroundColor: '#495E57'}}>
    //     <Footer/>
    //   </View>
    // </NavigationContainer>

    ////// THIS IS FOR THE TAB NAVIGATOR //////////////
    <NavigationContainer>
      <Tab.Navigator
        //below is to design & customize the icons
        screenOptions={({route})=> ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName; 

            if(route.name === 'Login') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if ( route.name === 'Welcome'){
              iconName = 'ios-list';
            }
            return <Ionicons nam={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name= "Login" component={LoginScreen}/>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  }
})