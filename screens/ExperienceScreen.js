import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProfileDescription from "../components/ProfileDescription";

const ExperienceScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Total Experience</Text>
            </View>
            <View style={styles.description}>
                <ProfileDescription descriptionList={props.expList} />
            </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        padding:10,
        
    },
    containerItem:{
        borderWidth: 1,
        borderColor: 'cornflowerblue'
    },
    heading: {
        backgroundColor: "cornflowerblue",
        padding: 10
      
    },
    headingText: {
        fontSize: 15,
        fontFamily: 'open-sans',
        color:"#fff"
    },
    description:{
        padding:4
    }

});
export default ExperienceScreen;