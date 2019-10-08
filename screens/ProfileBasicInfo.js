import React from 'react';
import { ScrollView, StyleSheet,View,Button,Linking,Text,Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { ExpoLinksView } from '@expo/samples';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { black } from 'ansi-colors';

const ExperienceScreen=()=> {
  return (
    <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.columnItemBig}>
                <View style={styles.columnItemList}>
                  <Text style={styles.columnText}>Number:</Text>
                  <Text style={styles.columnText}>8861958108</Text>
                </View>
                <View style={styles.columnItemList}>
                  <Text style={styles.columnText}>Email:</Text>
                  <Text style={styles.columnText}>gorakh.react@gmail.com</Text>
                </View>
                <View style={styles.columnItemList}>
                  <Text style={styles.columnText}>Domain:</Text>
                  <Text style={styles.columnText}>IT-Software</Text>
                </View>
                <View style={styles.columnItemList}>
                  <Text style={styles.columnText}>Specialization:</Text>
                  <Text style={styles.columnText}>Software Development</Text>
                </View>
              </View>
              <View style={styles.columnItemSmall}>
                <Image style={styles.profilePic} source={require("../assets/images/profilePic.jpg")} />
              </View>
            </View>
          </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  row: {
    width: '100%',
    height: 100,
    borderBottomColor: 'black',
    backgroundColor: 'lightsteelblue',
    borderBottomWidth: 0.5
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    height: "100%",
  },
  columnItemBig: {
    width: "80%",
    height: "100%",
    padding: 5
  },
  columnItemList: {
    flexDirection: "row",
    lineHeight: 400,
    alignItems: "center"
  },
  columnText: {
    color: "midnightblue",
    fontFamily: "open-sans",
    textAlign: "left",
    fontSize: 15,
    padding: 1,
    minWidth: "38%"
  },
  columnItemSmall: {
    width: "19.5%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilePic: {
    width: '90%',
    height: "90%",
    padding: 1
  }
});
export default ExperienceScreen;