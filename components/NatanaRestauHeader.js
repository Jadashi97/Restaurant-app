import * as React from 'react';
import { View,Text} from 'react-native';

export default function NatanaRestauHeader() {
  return (
    <View style={{flex:0.2, backgroundColor: '#F4CE14' }}>
      <Text style={{padding: 40, fontSize: 23, color: 'black', textAlign: 'center'}} numberOflines={2}>
        Welcome to The Natana Restaurant
      </Text>
    </View>
  );
}
