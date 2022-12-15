import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const menuItemsToShow = ['Keimot \n Laham \n samag \n bamiya \n ades \n lubia \n basiko \n weeka \n gidad \n koruf \n ganamaya \n cabbage \n janjaru',];

export default function MenuItems() {
  return (
    <View style={menuStyles.container}>
        <ScrollView
          indicatorStyle='white'
          style={menuStyles.innerContainer}>
          <Text style={menuStyles.headerText}>
            View Menu
          </Text>
          <Text style={menuStyles.itemText}>
              {menuItemsToShow[0]}
          </Text>
        </ScrollView>
    </View>
  )
}

// styling for this specific component

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: 'black'
  },
  headerText:{
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36
  }
})
