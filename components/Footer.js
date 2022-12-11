import * as React from 'react';
import {View, Text} from 'react-native';

export default function Footer() {
  return (
    <View style={{marginBottom:10, backgroundColor:'#F4CE14'}}>
      <Text style={{ fontSize: 18, color:'black', textAlign: 'center'}}>
        All rights reserved by little Lemon, 2022{' '}
      </Text>
    </View>
  )
}
