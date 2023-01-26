import { View, Text, StyleSheet } from 'react-native'

const CamaraScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Camara Screen </Text>
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

export default CamaraScreen
