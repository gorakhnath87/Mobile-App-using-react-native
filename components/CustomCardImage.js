import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim, update] = useState(new Animated.Value(.8))  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 2,
        duration: 5000,
        easing: Easing.back(),
        infinite: true
      }
    ).start();

    if (fadeAnim > 0) {
      update(0);
    }
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const CustomCardImage = (props) => (
  <View style={styles.Card}>
    <FadeInView style={{alignItems:'center',justifyContent:'center'}}>
     <Text style={styles.cardHeader}>{props.heading}</Text>
    </FadeInView>
   
    <Text style={styles.cardText}>{props.text}</Text>
  </View>
)
const styles = StyleSheet.create({
  Card: {
    padding: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 18,
    elevation: 10,
    color: 'midnightblue',
    justifyContent:'center'
  },
  cardText: {
    fontFamily: 'open-sans',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'left',
    lineHeight: 25,
    alignSelf: 'stretch',
    color: 'midnightblue'
  },
  cardHeader:{
    fontSize:15,
    fontFamily:'open-sans-bold',
    marginVertical:10,
    color: 'midnightblue',
    borderBottomColor:"steelblue",
    borderBottomWidth:.5,
    width:250,
   textAlign:'center',
    padding:3
    

    },
});
export default CustomCardImage;