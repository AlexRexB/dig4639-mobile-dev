import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component{
  render() {
  return (
    <View style = {styles.container}>
      <Text style={styles.titleText}>Mini Quiz</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8C471',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default App;


