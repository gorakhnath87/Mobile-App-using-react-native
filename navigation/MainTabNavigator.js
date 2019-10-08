import React from 'react';
import { Platform, Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SoftwareScreen from '../screens/SoftwareScreen';
import PumpScreen from "../screens/PumpScreen";
import EPCScreen from "../screens/EPCScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ServiceScreen from "../screens/ServicesScreen";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen

  },
  config
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  config
);

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
  },
  config
);
const SoftwareStack = createStackNavigator(
  {
    Software: SoftwareScreen,

  },
  config
);
const EPCStack = createStackNavigator(
  {
    Epc: EPCScreen,

  },
  config
);
const PumpStack = createStackNavigator(
  {
    Pump: PumpScreen,

  },
  config
);


const HomeTab = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {

      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarOptions: {
        activeTintColor: 'dodgerblue',
        labelStyle: {
          fontSize: 12,
          fontFamily:'open-sans-bold'
        }
      },
      style: {
        height:55
      }
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-person" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
          fontFamily:'open-sans-bold'
        },
        style: {
          backgroundColor: 'skyblue'
          //height:
        },
      }
    }
  }
})
const ServiceTab = createBottomTabNavigator({
  Software: {
    screen: SoftwareStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-laptop" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "blue"
    }
  },
  EPC: {
    screen: EPCStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialCommunityIcons name="engine" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "blue"
    }
  },
  Pump: {
    screen: PumpStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialCommunityIcons name="water-pump" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "blue"
    }
  }
}
);

const drawNavigator = createDrawerNavigator({

  Home: {
    screen: HomeTab,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: tabInfo => {
        return (
          <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
        );
      },
      itemStyle: { fontFamily: 'open-sans-bold', fontSize: 18 }
    }
  },
  // Service: {
  //   screen: ServiceTab,
  //   navigationOptions: {
  //     drawerLabel: 'Service',
  //     drawerIcon: tabInfo => {
  //       return (
  //         <Ionicons name="ios-code-working" size={25} color={tabInfo.tintColor} />
  //       );
  //     },
  //   }
  // },
  About: {
    screen: AboutStack,
    navigationOptions: {
      drawerLabel: 'About',
      drawerIcon: tabInfo => {
        return (
          <Ionicons name="ios-information-circle-outline" size={25} color={tabInfo.tintColor} />
        );
      },
    }
  },
  Contact: {
    screen: ContactStack,
    navigationOptions: {
      drawerLabel: "Contact",
      drawerIcon: tabInfo => {
        return (
          <Ionicons name="ios-contacts" size={25} color={tabInfo.tintColor} />
        );
      },
    }
  }
},
  {
    drawerBackgroundColor: 'lightsteelblue',
    drawerWidth: 240,
    edgeWidth:10,
    activeBackgroundColor: 'skyblue',
    contentOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor:'slateblue',
      itemsContainerStyle: {
        marginVertical: 40,
      },
      iconContainerStyle: {
        opacity: 2
      },
      labelStyle:{
        fontFamily:'open-sans',
        fontSize:15
      }
    }

  }
)

export default drawNavigator;
