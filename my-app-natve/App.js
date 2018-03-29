import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Note from './Note.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Note></Note>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textItem: {
        
        color: 'blue',
        
    },
    
    textInput: {
        width: 200,
    },
});
