import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Platform } from 'react-native';

import Character from '../components/Cards/Character'

const Characters = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Characters</Text>
      {/* Usar el FlatList */}
      <Character />
      <Character />
      <Character />
      <Character />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
  },
  list: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Characters;
