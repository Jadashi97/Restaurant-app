import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList, Pressable} from 'react-native';


const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Keimot', price: '$5.00' },
      { name: 'janjaru', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'salata aswet', price: '$5.00' },
      { name: 'mula weeka', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'bambe', price: '$10.00' },
      { name: 'koruf', price: '$14.00' },
      { name: 'bafura', price: '$11.00' },
      { name: 'tamiya', price: '$5.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Rice', price: '$3.00' },
      { name: 'Bread', price: '$3.00' },
      { name: 'Asida', price: '$3.00' },
      { name: 'potato', price: '$3.75' },
      { name: 'Salad', price: '$6.00' },
      { name: 'matooke', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator}/>

export default function RenderSectionList({navigation}) {

  const [showMenu, setShowMenu] = useState(false);

  const renderItem = ({item}) => <Item name={item.name} price={item.price}/>;

  const renderSectionHeader = ({ section: { title }}) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>
        {title}
      </Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          This is a restautarant built to serve our
          local community with recipes that come from 
          mama's Kitchen.
        </Text>
      )}
        <Pressable style={menuStyles.button}
          onPress={()=> {
            setShowMenu(!showMenu);
          }}>
          <Text>
            {showMenu ? 'Home' : 'View Menu'}
          </Text>
        </Pressable>
        {showMenu && (
          <SectionList
            sections={menuItemsToDisplay}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={Separator}></SectionList>)}
            <Pressable onPress={()=> navigation.goBack()}>
              <Text style={menuStyles.button}>Go Back</Text>
            </Pressable>
    </View>
  );
};

// styles
const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  sectionHeader: {
    color: 'black',
    fontSize: 26, 
    flexWrap:'wrap',
    textAlign:'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
});
