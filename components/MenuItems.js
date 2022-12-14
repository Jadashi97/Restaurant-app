import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const menuItemsToShow = ['Keimot \n Laham \n samag \n bamiya \n ades \n lubia \n basiko \n weeka \n gidad \n koruf \n ganamaya \n cabbage \n janjaru',];

export default function MenuItems() {
  return (
    <View style={{flex:0.75}}>
        <ScrollView
          indicatorStyle='white'
          style={{
            paddingHorizontal: 40,
            paddingVertical: 40,
            backgroundColor: 'black'
          }}>
          <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap'}}>
            View Menu
          </Text>
          <Text style={{color: '#F4CE14', fontSize: 36}}>
              {menuItemsToShow[0]}
          </Text>
        </ScrollView>
    </View>
  )
}
