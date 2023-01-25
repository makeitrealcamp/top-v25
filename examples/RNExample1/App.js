import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

import logo from './assets/favicon.png'
import Layout from './componets/Layout/Layout';
// import FlexDimensionsBasic from './componets/Dimensions/Default/FlexDimensionsBasics';
// import FlexDimensionsBasic from './componets/Dimensions/Fixed/FlexDimensionsBasic';
// import FlexDimensionsBasic from './componets/Dimensions/Percentage/FlexDimensionsBasic';
// import LayoutDirections from './componets/Layout/LayoutDirections';
import Form from './componets/Form';

function App() {
  return (
    <>
      <Form />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // mobile center aligns items to the center - horizontal
    alignItems: 'center', // web aligns items to the center - vertical

    // mobile center aligns items to the center - vertical
    justifyContent: 'center', // web justifies content to the center - horizontal
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    backgroundColor: '#FF0000',
    color: 'white',
    fontSize: 24,
  },
})

export default App;
