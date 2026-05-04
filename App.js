import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('register');

  if (screen === 'register') {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTop}>Create New Account</Text>

        <Text style={styles.topText}>
          Already registered?{' '}
          <Text style={styles.linkBold} onPress={() => setScreen('login')}>
            Login here
          </Text>
        </Text>

        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <TextInput placeholder="Date of Birth" style={styles.input} />
        <TextInput placeholder="Phone Number" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === 'login') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.linkBold} onPress={() => setScreen('register')}>
          Create New Account
        </Text>

        <Text style={styles.linkBold} onPress={() => setScreen('forgot')}>
          Forgot Password?
        </Text>
      </View>
    );
  }

  if (screen === 'forgot') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>

        <TextInput placeholder="Email" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        <Text style={styles.linkBold} onPress={() => setScreen('login')}>
          Back to Login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // 🔥 PUTIH
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop: 60
  },
  titleTop: {
    fontSize: 26,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 20
  },
  topText: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    color: '#000'
  },
  button: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  linkBold: {
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  }
});