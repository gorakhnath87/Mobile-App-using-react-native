import React from 'react';
import { ScrollView, StyleSheet,View,Button,Linking,Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LinksScreen=()=> {
  _handleOpenWithLinking = () => {
    Linking.openURL('https://expo.io');
  }
  
  handleOpenDummyWebsite = () => {
    WebBrowser.openBrowserAsync('https://gnreact.herokuapp.com/');
  }
  handleOpenFlexWebsite = () => {
    WebBrowser.openBrowserAsync('https://flexreact.herokuapp.com/');
  }
  handleOpenStackWebsite = () => {
    WebBrowser.openBrowserAsync('https://stackoverflow.com/users/6560375/jack');
  }
  handleOpenGitWebsite = () => {
    WebBrowser.openBrowserAsync('https://github.com/gorakhnath87');
  }
  handleMediumWebsite=()=>{
    WebBrowser.openBrowserAsync('https://medium.com/@gorakhnath87');
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <TouchableOpacity onPress={handleOpenDummyWebsite}  activeOpacity={0.7}  style={styles.link}>
          <Text  style={styles.linkText}>Open React Dummy Website</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity onPress={handleOpenFlexWebsite} activeOpacity={0.7} style={styles.link}>
          <Text  style={styles.linkText}>Open Flex Dummy Website</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity onPress={handleOpenStackWebsite}  activeOpacity={0.7}  style={styles.link}>
          <Text  style={styles.linkText}>Open StackOverflow Profile</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity onPress={handleMediumWebsite}  activeOpacity={0.7}  style={styles.link}>
          <Text  style={styles.linkText}>Open Medium Profile</Text>
        </TouchableOpacity>
        </View> 
        <View style={styles.button}>
        <TouchableOpacity onPress={handleOpenGitWebsite}  activeOpacity={0.7}  style={styles.link}>
          <Text style={styles.linkText}>Open Git Profile</Text>
        </TouchableOpacity>
        </View>      
      </View>
  
  
 
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  button: {
    marginBottom: 18
  },
  buttonContainer:{
   alignItems:"center",
   justifyContent:"center"
  },
  link:{
    padding:12,
    fontFamily:'open-sans',
    backgroundColor:'skyblue',
    borderRadius:100,
    textAlign:'center',
    fontSize:15,
    shadowColor:'black',
    shadowOpacity:0.3,
    shadowRadius:10,
    shadowOffset: { width: 0, height: 10 },
    elevation:10
  },
  linkText:{
    fontFamily:'open-sans',
    fontSize:15,
    color:'midnightblue'
  }
});
export default LinksScreen;