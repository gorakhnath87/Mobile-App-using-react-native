import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';

const CustomCard=(props)=>(
    <View style={styles.Card}>
    <View style={styles.cardIcon}>
        {props.iconType==="ionicons"? <Ionicons name={props.iconName}  size={props.iconSize} color={props.iconColor}/>:
    <MaterialCommunityIcons name={props.iconName}  size={props.iconSize} color={props.iconColor}/>}
    </View>
    <Text style={styles.cardHeader}>{props.heading}</Text>
    <Text style={styles.cardText}>{props.text}</Text>
  </View>
)
const styles=StyleSheet.create({
    Card: {
   
        width: 250,
        padding:15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems:"center",
        marginVertical: 15,
        elevation:10
      },
      cardIcon: {
        marginVertical:2,
        borderBottomColor:"steelblue",
        borderBottomWidth:.5,
        width:100,
        alignItems:'center',
        padding:3
      
        
      },
      cardHeader:{
      fontSize:18,
      fontFamily:'open-sans-bold',
      color: 'midnightblue'
      },
      cardText:{
      fontFamily:'open-sans',
      fontSize:15,
      marginVertical:5,
      textAlign:'left',
      lineHeight:25,
      alignSelf:'stretch',
      color: 'midnightblue'
      }
});
export default CustomCard;