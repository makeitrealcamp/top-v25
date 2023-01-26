import { View, Text, StyleSheet } from 'react-native'

const MapScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Map Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
})

export default MapScreen
