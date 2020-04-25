import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';


export default class AddContactScreen extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      submitDisabled:true,
      contactText:"",
    }
  }

handleTextInput(text) {
  if(text.length > 0) {
    this.setState(
      {
        submitDisabled:false,
        contactText:text
      })
  } else {
    this.setState({submitDisabled:true})
    console.log(text)
  }
}
handleAddContact() {
  console.log("Added!")
  console.log(this.state.contactText)
  fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: "POST",
      headers: {
        "API":"baez",
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({text:this.state.contactText})
    })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        if(body.added != undefined) {
          console.log("Successfully added a contact!")
          this.props.navigation.navigate('Profile')
        } else {
          console.log("Error adding contact")
        }
        
      })
}

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Input placeholder="e.g. Brad Pitt"
        onChangeText={text => this.handleTextInput(text)} />
      
      <Button title="Add a Contact"
        disabled={this.state.submitDisabled}
        onPress={() => this.handleAddContact()}/>
      </ScrollView> 
    );
  }
}
function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  labelText: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
