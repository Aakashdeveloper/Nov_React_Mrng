import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ListItem from './component/ListItem'

export default function App() {
  const [OutputText,setText] = useState("Test Button on Native");

  return ( 
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>My Native App</Text>
      <Text>{OutputText}</Text>
      <Button title="Click Me" onPress={() => setText("Text Changed")}/>
      <Button title="Revert Me" onPress={() => setText("Test Button on Native")}/>
      <ListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
