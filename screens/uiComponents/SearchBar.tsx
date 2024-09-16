import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window'); 

const SearchBar = ({ value, onChange }: any) => (
  <View style={styles.searchContainer}>
    <Icon name="search" size={24} color="#888" style={styles.icon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search..."
      value={value}
      onChangeText={onChange}
    />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    margin: 10,
    width: width * 0.9, 
    alignSelf: 'center', 
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    paddingVertical: 0,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
