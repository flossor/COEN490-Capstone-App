import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../components/StyleSheet'; // Adjust this path if necessary

const SignUpScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // TODO: Implement your sign-up logic here
        // For example, you might want to validate the input and then
        // navigate to another screen or call an API to create an account
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SIGN UP</Text>
            <Text style={styles.subtitle}>Create your account</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                onChangeText={setFullName}
                value={fullName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;
