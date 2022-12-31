import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function NatanaRestauHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        <Text style={headerStyles.innerheader}> Natana Restaurant</Text>
      </Text>
    </View>
  );
}

// stytling the header
const headerStyles = StyleSheet.create({
  container: {
    flex:0.14,
    backgroundColor: '#EE9972'
  },
  headerText: {
    padding: 40, fontSize: 30, color: 'black', textAlign: 'center',
  },
  innerheader: {
    fontWeight:'bold'
  }
})