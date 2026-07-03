import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Dashboard</Text>
      {/* Yahan abhi humne jagah chhod di hai */}
      <View style={styles.contentArea}>
        <Text style={styles.placeholderText}>Content coming soon...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingTop: 50, 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  contentArea: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  placeholderText: { 
    color: '#aaa', 
    fontSize: 16 
  }
});