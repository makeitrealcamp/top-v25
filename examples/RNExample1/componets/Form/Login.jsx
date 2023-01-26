import { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { loginUser } from '../../services/auth';

const LoginForm = ({ navigate }) => {
  const [form, setForm] = useState({});

  const handleChangeText = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  const handleSubmit = async () => {
    // Navegar al home ???
    navigate('Landing');

    // if (!form?.email && !form?.password) {
    //   Alert.alert('Error', 'Please enter your email and password');
    //   return;
    // }

    // try {
    //   const response = await loginUser(form);
    //   const { token, profile } = await response.json();
    //   console.log('token', token);
    // } catch (error) {
    //   Alert.alert('Error', 'Invalid email or password');
    // }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Login Top v25</Text>
      </View>
      <Text style={styles.text}>Email</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(text) => handleChangeText('email', text)}
        keyboardType="email-address"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        autoCapitalize="none"
        onChangeText={(text) => handleChangeText('password', text)}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#BB86FC',
    fontSize: 30,
    marginBottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    height: 40,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: 300,
  },
  button: { backgroundColor: '#BB86FC', padding: 7, marginTop: 10 },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginForm;
