import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  Switch,
  TextInput,
  Text,
  View,
  } from 'react-native';
import { useState } from 'react'

import styles from './Form.styles';
import { loginUser } from '../../services/auth';

const Form = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({})

  const onChangeText = (input, value) => {
    setForm({
      ...form,
      [input]: value
    })
  }

  const handleSubmit = async () => {
    try {
      const data = await loginUser(form)
      Alert.alert('Success', 'Login success')
    } catch (error) {
      console.log("error", error)
      Alert.alert('Error', 'Ocurrio un error')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.text}>
       Login
      </Text>

      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => { onChangeText('email', text) }}
      />

      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry={!showPassword}
        onChangeText={(text) => { onChangeText('password', text) }}
      />

      <Switch
        value={showPassword}
        onValueChange={() => setShowPassword(!showPassword)}
      />
      <Button
        title='Login'
        onPress={handleSubmit}
        style={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

export default Form;
