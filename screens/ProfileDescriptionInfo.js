import React from 'react';
import { View, Text,StyleSheet } from 'react-native';


const ProfileDescriptionInfo = (props) => {
    return (
        <View style={styles.rowDescription}>
            <View style={styles.columnItemFull}>
                <Text style={styles.profileHeading}>
                    {props.heading}
                </Text>
            </View>
            {props.children}
        </View>
    );
}



const styles = StyleSheet.create({
    rowDescription: {
        width: '100%',
        padding: 9,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 2,
        backgroundColor: 'lightsteelblue',

    },
    columnItemFull: {
        alignItems: 'center'
    },
    profileHeading: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'midnightblue',
        marginVertical: 10,
        textAlign: "center",
        borderBottomColor: "midnightblue",
        borderBottomWidth: .5,
        width: 250,
        justifyContent: "center"
    }

});
export default ProfileDescriptionInfo;