import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';

const menuItemsToShow = [
  {name: 'Keimot', id: '1A'},
  {name: 'samag', id: '2B'},
  {name: 'bamiya', id: '3C'},
  {name: 'ades', id: '4D'},
  {name: 'lubia', id: '5E'},
  {name: 'basiko', id: '6F'},
  {name: 'weeka', id: '7G'},
  {name: 'gidad', id: '8H'},
  {name: 'koruf', id: '9I'},
  {name: 'ganamaya', id: '10J'},
  {name: 'cabbage', id: '11K'},
  {name: 'janjaru', id: '12L'}
];

const Item = ({name}) => {
  <view style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>
      {name}
    </Text>
  </view>
}

export default function MenuItems() {
  const renderItem = ({ item }) => <Item name={item.name}/>;

  return (
    <View style={menuStyles.container}>
          <Text style={menuStyles.headerText}>
            View Menu
          </Text>
          {/* <Text style={menuStyles.itemText}>
              {menuItemsToShow[0]}
          </Text> */}
          <FlatList 
            data={menuItemsToShow} 
            keyExtractor={(item) => item.id} 
            renderItem={renderItem}/>
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
    backgroundColor: 'black'
  },
  headerText:{
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36
  }
})
