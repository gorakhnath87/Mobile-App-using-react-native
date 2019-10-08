import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#87cefa','#f0f8ff','#87cefa']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            alignItems:"center",
            justifyContent:"center"
          }}>
          <View style={styles.contact}>
            <Text  style={styles.contactText}>
              GN EPC PVT. LTD.</Text>
            <Text  style={styles.contactText}>
             b.t.m. layout</Text>
            <Text  style={styles.contactText}>Opposite to btm water tank</Text>
            <Text  style={styles.contactText}>Bangalore, (K.A) INDIA</Text>
            <Text  style={styles.contactText}>Call: +91-8861958108</Text>
            <Text  style={styles.contactText}>Email: gorakh.react@gmail.com
            </Text>
          </View>

        </LinearGradient>
      </View>
    </View>
  );
}

ContactScreen.navigationOptions = navData => {
  return {
    headerTitle:"Contact",
   
    headerTitleStyle: {
      textAlign: 'center',
    alignSelf: 'center',
    alignItems:'center',
     justifyContent:'space-between',
     marginLeft:"35%",
     color:"midnightblue",
     fontFamily:'open-sans',
     fontSize:18
    },
    headerStyle:{
      backgroundColor: 'mintcream',
      height:55
    },
    headerRight: (
      <View style={styles.rightHeader}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('../assets/images/splash.png')} />
      </View>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
   // backgroundColor: '#fff',
    height:'100%'
  },
  header:{
    //marginLeft:"30%"
   },
   rightHeader:{
     marginRight:4
   },
   contact:{
     alignItems:'center',
     justifyContent:'center'
   },
   contactText:{
     lineHeight:30,
     color:'midnightblue',
     fontFamily:'open-sans',
    padding:10,
    fontSize:16
   }

});
