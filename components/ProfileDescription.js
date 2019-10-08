import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileDescription = (props) => {

    showDescription = (list) => {
        if (list && list.length > 0) {
            return list.map((item, i) => {
                return (
                    <View style={styles.profileDescription} key={i}>
                        <View style={styles.descriptionIcon}>
                            <Ionicons name="ios-arrow-forward" size={18} color="midnightblue" />
                        </View>
                        <Text style={styles.text}>
                            {item}
                        </Text>
                    </View>
                )
            })
        }
        return null;
    }

    return (
        <View style={styles.container}>
            {showDescription(props.descriptionList)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

  
    },
    profileDescription: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 3,
        overflow: 'hidden',
        textAlign: "left",
        justifyContent: "flex-start"
    },
    descriptionIcon: {
        alignItems: "center",
        marginRight: 8
    },
    text: {
        color: "midnightblue",
        fontFamily: "open-sans",
        textAlign: "left",
        fontSize: 14,
        padding: 2,
        flex:1
    },
});
export default ProfileDescription;
