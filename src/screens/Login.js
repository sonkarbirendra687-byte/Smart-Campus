import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  input: { 
    width: '100%', 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    marginBottom: 15 
  },
  button: { 
    width: '100%', 
    height: 50, 
    backgroundColor: '#007AFF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8 
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});