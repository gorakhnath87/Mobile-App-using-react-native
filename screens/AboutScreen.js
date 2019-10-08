import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Easing,
  Image

} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomCardImage from "../components/CustomCardImage";
import Carousel from "../components/Crousel";


import CustomHeaderButton from '../components/HeaderButton';
import CustomCard from "../components/CustomCard";



export default function AboutScreen() {
  const Images = [
    {
      id:1,
      source:require('../assets/images/solar2.jpg')
    },
    {
      id:2,
      source:require('../assets/images/software.jpg')
    },
    {
      id: 3,
      source:require('../assets/images/pump1.jpg')
    }
   ];

  let config = {
    heading: "GN EPC PRIVATE LIMITED",
    text: "GN EPC PVT. LTD. is a one stop solution for It-Services, Pumps, Wastewater, Solar and EPC Projects. We provide all type of pumps with spares parts, Sewage Treatment Plant, Water treatment plant, Pumping Station, Solar Rooftop solution for On Grid /Off Grid, Solar water pumps and street light, EPC for Power Transmission and distribution. From Concept to Erection, Testing and Commissioning to Repair and Maintenance, Spare parts replacement everything is taken care by our expert. Our services are cost effective and provided by highly skilled and experienced professionals."
  }
  return (
    <SafeAreaView style={styles.container}
      onPress={() => { props.navigation.dispatch(DrawerActions.toggleDrawer()) }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.aboutContainer}>
          
          <CustomCardImage {...config} />
          <View style={styles.carousel}>
          <Carousel images={Images}/>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

AboutScreen.navigationOptions = navData => {
  return {
    headerTitle:"About Us",
   
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
    backgroundColor: '#fff'
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flexDirection:'row'
  },
  fadeContainer: {

  },
  fadeStyle: {
    backgroundColor: 'skyblue',
    padding: 3
  },
  aboutContainer: {
    justifyContent: 'center',
    alignItems: "center"
  },
  pageHeader:{
    fontSize: 20, 
    textAlign: 'center',
    color: 'midnightblue',
    fontFamily:'open-sans-bold',
    marginTop:18
  },
  header:{
    //marginLeft:"30%"
   },
   rightHeader:{
     marginRight:4
   }

});
