import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';

export default function WelcomeScreen() {
  return (
        <ScrollView
            indicatorStyle='white'
            style={styles.container}>
            <Image style={styles.logo} source={require('/Users/nyarjijada/Desktop/React-Native/NatanaRestaurant/assets/logo.png')}/>
            <Text style={styles.headerText}>
                Welcome to Natana Restaurant 
            </Text> 
            <Text
                style={styles.mainInfo}>
                The Natana Restaurant is a charming neighborhood bistro that 
                serves simple food and classic cocktails in a casual environment.
                We would like to see you more. We love that you are here to support us 
                and offer back to the local community.
            </Text>
        </ScrollView>
  )
};

const styles = StyleSheet.create({
    container:{
        flex: 0.78,
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: '#333333'
    },
    logo:{
        height: 100,
        width: 300,
        resizeMode: "contain"
    },
    headerText: {
        padding: 20,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    mainInfo: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }
});