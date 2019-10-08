import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomCard from "../components/CustomCard";

import CustomHeaderButton from '../components/HeaderButton';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ourTargetText, ourVisionText, basicInfoText, worldOfficeText } from "../constants/AllTexts";
import * as colors from "../constants/Colors";

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container} onPress={ ()=>{props.navigation.dispatch(DrawerActions.toggleDrawer())}}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground style={styles.image}
          source={require('../assets/images/solar.jpg')}>
          <CustomCard text={basicInfoText} heading="Basic Info" iconName="ios-information-circle-outline" iconColor="steelblue" iconType="ionicons" iconSize={30} />
          <CustomCard text={ourVisionText} heading="Our Vision" iconName="ios-eye" iconColor="steelblue" iconType="ionicons" iconSize={30} />
          <CustomCard text={ourTargetText} heading="Our Target" iconName="target" iconColor="steelblue" iconType="material" iconSize={30} />
          <CustomCard text={worldOfficeText} heading="World Office" iconName="ios-globe" iconColor="steelblue" iconType="ionicons" iconSize={30} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>

  );
}

HomeScreen.navigationOptions = navData => {
  return {
    headerTitle: (
        <View style={styles.header}>
        <Image
          style={{ width: 45, height: 45 }}
          source={require('../assets/images/splash.png') } />
          </View>
      ),
      headerStyle:{
        backgroundColor: 'mintcream',
        height:55
      },
    headerTitleStyle: { 
      textAlign: 'center',alignSelf:'center'
  },
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
    backgroundColor: '#fff',
    flexGrow: 1,
    padding:1
  },
  image: {
    alignItems: "center",
    justifyContent: "center"
  },
  header:{
   marginLeft:"35%"
  }
});
