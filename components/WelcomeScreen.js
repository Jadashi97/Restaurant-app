import React from 'react';
import { View, Text, ScrollView} from 'react-native';

export default function WelcomeScreen() {
  return (
        <ScrollView
            indicatorStyle='white'
            style={{
                flex: 0.78,
                paddingHorizontal: 40,
                paddingVertical: 40,
                backgroundColor: 'black'
            }}>
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
                    fontSize: 38,
                    padding: 20,
                    marginVertical: 8,
                    color: '#EDEFEE',
                    textAlign: 'center',
                }}>
                The Natana Restaurant is a charming neighborhood bistro that 
                serves simple food and classic cocktails in a casual environment.
                We would like to see you more. We love that you are here to support us 
                and offer back to the local community.
            </Text>
        </ScrollView>
  )
}
