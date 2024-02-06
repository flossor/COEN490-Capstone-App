import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = {
      fullName,
      email,
      password
    };

    fetch('https://example.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registration successful:', data);
        // Handle the response from the backend service
        // For example, show a success message to the user
        saveAccountInformation(data); 
        // Call the function to save the account information
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // Handle the error from the backend service
        // For example, show an error message to the user
      });
  };

  const saveAccountInformation = (data) => {
    // Implement the logic to save the account information
    // For example, use AsyncStorage or a database query
    // to store the user's information

    console.log('Saving account information:', data);
    // code to save the account information
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      <Text style={styles.subtitle}>Create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Register"
        onPress={handleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray', 
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
});

export default SignUpScreen;
