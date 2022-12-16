import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';

const menuItemsToShow = [
  {name: 'Keimot', price: '$3.00', id: '1A'},
  {name: 'samag', price: '$5.00', id: '2B'},
  {name: 'bamiya', price: '$5.00', id: '3C'},
  {name: 'ades', price: '$4.00', id: '4D'},
  {name: 'lubia', price: '$2.00', id: '5E'},
  {name: 'basiko', price: '$5.00', id: '6F'},
  {name: 'weeka', price: '$5.00', id: '7G'},
  {name: 'gidad', price: '$7.00', id: '8H'},
  {name: 'koruf', price: '$7.00', id: '9I'},
  {name: 'ganamaya', price: '$7.00', id: '10J'},
  {name: 'cabbage', price: '$5.00', id: '11K'},
  {name: 'janjaru', price: '$3.00', id: '12B'},
  {name: 'bambe', price: '$2.00', id: '1L'},
  {name: 'bafura', price: '$2.00', id: '18C'},
  {name: 'tamiya', price: '$2.00', id: 'DL'},
  {name: 'sambusa', price: '$3.00', id: 'NL'},
];

const Item = ({name, price}) => (
  <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>
        {name}
      </Text>
      <Text style={menuStyles.itemText}>
        {price}
      </Text>
  </View>
);

export default function MenuItems() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>;

  return (
    <View style={menuStyles.container}>
          <Text style={menuStyles.headerText}>
            View Menu
          </Text>
          <FlatList
            style={menuStyles.itemText}
            data={menuItemsToShow} 
            keyExtractor={(item) => item.id} 
            renderItem={renderItem}
          ></FlatList>
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
    paddingVertical: 20,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerText:{
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 30
  }
})
