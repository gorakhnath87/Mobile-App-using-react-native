import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const height = width * 0.8

export default class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map(image => (
              <View key={image.id}  style={{...styles.imageContainer}}>
              <Image style={styles.image} source={image.source} />
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

const styles = StyleSheet.create({
    scrollContainer: {
      height:200,
      borderBottomColor:'midnightblue',
      borderTopColor:'midnightblue',
      borderTopWidth:.5,
      borderBottomWidth:.5,
      shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
  
    },
    image: {
      width:160,
      height:160
    },
    imageContainer:{
      padding:10,
      alignItems:"center",
      justifyContent:"center"
    }
  });

