import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProfileDescription from "../components/ProfileDescription";

const ProjectScreen = (props) => {

    showProject = (list) => {
        if (list && list.length > 0) {
            return list.map((item,i) => {
                return (
                    <View style={styles.container} key={i}>
                        <View style={styles.containerContent}>
                            <View style={styles.projectHeading}>
                                <Text style={styles.headingText}>{i+1}</Text>
                                <Text style={styles.headingText}>{item.projectName}</Text>
                            </View>
                            <View style={styles.projectInfo}>
                                <View style={styles.projectInfoList}>
                                    <Text style={styles.projectInfoList1}>Role:</Text>
                                    <Text style={styles.projectInfoList2}>{item.role}</Text>
                                </View>
                              
                                <View  style={styles.projectInfoList}>
                                    <Text style={styles.projectInfoList1}>Tools/Technology:</Text>
                                    <Text style={styles.projectInfoList2}>{item.toolTech}</Text>
                                </View>
                            </View>
                            <View style={styles.projectDescription}>
                                   <Text style={styles.descriptionHeadingText}>Project Description</Text> 
                                <View>
                                    <Text  style={styles.descriptionText}>{item.projectDescription}</Text>
                                </View>
                            </View>
                            <View style={styles.projectRole}>
                             <Text style={styles.descriptionHeadingText}>Roles and Responsibility:</Text> 
                              <View style={styles.descriptionTextContainer}>
                                    <ProfileDescription descriptionList={item.responsibilityList}/>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
        else {
            return null;
        }

    }

    return (
        <View>
            {showProject(props.projectList)}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerContent:{
       borderColor:"cornflowerblue",
       borderWidth:1
    },
    projectHeading:{
       flexDirection:'row',
       backgroundColor:"cornflowerblue",
       justifyContent:'space-between',
       padding:10
    },
    headingText:{
        fontFamily:'open-sans-bold',
        fontSize:15,
        color:"#fff"
    },
    projectInfo:{
        borderBottomColor:'cornflowerblue',
        borderBottomWidth:1
       
    },
    projectInfoList:{
        flexDirection:"row",
        padding:3,
        overflow:'hidden'
        
    },
    projectInfoList1:{
        fontFamily:'open-sans-bold',
        fontSize:14,
        color:'midnightblue',
        width:'40%'
    },
    projectInfoList2:{
        fontFamily:'open-sans',
        fontSize:14,
        color:'midnightblue',
        textAlign:"left",flex:1
    },
    projectDescription:{
        padding:2
    },
    projectRole:{
        padding:2
    },
    descriptionHeadingText:{
        fontWeight:"800",
        fontFamily:'open-sans',
        color:'midnightblue'
    },
    descriptionText:{
        fontFamily:'open-sans',
        color:'midnightblue',
        padding:4
    },
    descriptionTextContainer:{
        padding:2
    }


});
export default ProjectScreen;