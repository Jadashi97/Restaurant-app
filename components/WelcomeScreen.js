import React from 'react';
import { View, Text} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex:1,fontSize: 20, color: 'white'}}>
        <Text
            style={{
                padding: 40,
                fontSize: 30,
                color: '#EDEFEE',
                textAlign: 'center',
            }}>
            Welcome to Natana Restaurant
        </Text> 
        <Text
            style={{
                fontSize: 24,
                padding: 20,
                marginVertical: 8,
                color: '#EDEFEE',
                textAlign: 'center',
            }}>
            The Natana Restaurant is a charming neighborhood bistro that 
            serves simple food and classic cocktails in a casual environment.
            We would like to see you more.
        </Text>
    </View>
  )
}
