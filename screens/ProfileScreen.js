import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import ProfileDescription from "../components/ProfileDescription";
import LinksScreen from "../screens/LinksScreen";
import ExperienceScreen from "../screens/ExperienceScreen";
import ProfileBasicInfo from "../screens/ProfileBasicInfo";
import ProfileDescriptionInfo from "../screens/ProfileDescriptionInfo";
import ProjectScreen from "../screens/ProjectScreen";

import { ProfDescription1,
         ProfDescription2, 
         ProfDescription3, 
         ProfDescription4,
         ProfDescription5, 
         ProfDescription6, 
         ProfDescription7, 
         ProfDescription8,
         ProfEducationBE,
         ProfEducationSC, 
         ExpMindTree,
         ExpMagna,
         ExpIncRev } from "../constants/AllTexts";
         

export default function ProfileScreen(props) {

  let profSummaryList=[ProfDescription1,ProfDescription2,ProfDescription3,
                        ProfDescription4,ProfDescription5,ProfDescription6,
                        ProfDescription7,ProfDescription8];

  let profEducationList=[ProfEducationBE,ProfEducationSC];

  let expList=[ExpMindTree,ExpIncRev,ExpMagna];

  let projectOne={
    projectName:'Online Shopping',
    role: 'Module Lead',
    toolTech:'Bit Bucket, Git , Netlify, Sourcetree,  Gatsby, Graphql, Contentful',
    projectDescription: 'This application use for displaying the different products, by using this application user can add any products in card and perform online shopping of selected products.',
    responsibilityList:[
      "Adding the data model in contentful.",
      "Adding the graphql query.",
      "Creating component based on requirement."
    ]
  };
  let projectTwo={
    projectName:'On Boarding application',
    role: 'Module Lead',
    toolTech:'Bit Bucket, Git , Netlify, Sourcetree, ReactJs, Formik, Jest, ESLint, JSDoc',
    projectDescription: 'This project use for performing all the on boarding process of the user online. It contains many form that user need to fill and submitted to complete the on boarding to the organization.',
    responsibilityList:[
      "Create reusable component to deal with the form submission.",
      "Creating and design the web component.",
      "Assigning task to respective team member.",
      "Writing Test case."
    ]
  };
  let projectThree={
    projectName:'Online Quiz application',
    role: 'Module Lead',
    toolTech:'Bit Bucket, Git, ReactJs, Graphql, GatsBy, Contentful, TailWindCSS',
    projectDescription: 'This project use for organizing online quiz competition, it contains question with answers as options, based on answer selected by the user this application take decision about the best suited product for the user.',
    responsibilityList:[
      "Creating component.",
      "Adding data structure and data in contentful.",
      "Writing query using graphql to manage the data."
    ]
  };
  let projectFour={
    projectName:'To-do list',
    role: 'Module Lead',
    toolTech:'Bit Bucket, Git , ReactJs, TypeScript, Redux, Highchart',
    projectDescription: 'This project used for displaying the list of completed and uncompleted task of the bank user.We used high chart to display the chart of the completed and uncompleted task based.',
 
    responsibilityList:[
      "Developing the component based on requirement.",
      "Assigning the task to respective team member.",
      "Designing the project structure."
    ]
  };
  let projectFive={
    projectName:'Device Application',
    role: 'Senior Software Developer',
    toolTech:'Git, Bitbucket, ReactJs, Redux, JsDoc, SCSS, Karma, Web API, Identity Server',
    projectDescription: 'This is an application use for managing the blood report of patients, device information and creating online patient requisition.',
    responsibilityList:[
      "Designing the project structure.",
      "Analyzing the requirement and doing developing as per requirement.",
      "Guiding the junior colleague with the requirement and coding.",
      "Writing Test case."
    ]
  };
  let projectSix={
    projectName:'Health care Application',
    role: 'Software Developer',
    toolTech:'Tortoise SVN, Bitbucket, C#, Wpf, MVC, WCF, Asp.Net Web-API, LinqtoSql, SqlServer2012, Entity Framework',
    projectDescription: 'It is an application use for handling all end-to-end activity of a patient, doctor and other member of hospital.',
    responsibilityList:[
      "Analyzing the requirement and doing development using .net framework.",
      "Creating WCF services based on requirement.",
      "Writing store procedure in sql server.",
      "Writing the Linq query."
    ]
  };


  let projectList=[projectOne,projectTwo,projectThree,projectFour,projectFive,projectSix];

  return (
    <SafeAreaView style={styles.container} 
      onPress={() => { props.navigation.dispatch(DrawerActions.toggleDrawer()) }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profile}>
          <ProfileBasicInfo/>
          <ProfileDescriptionInfo heading="Professional Summary:">
            <ProfileDescription descriptionList={profSummaryList} />
          </ProfileDescriptionInfo>
          <ProfileDescriptionInfo heading="External Personnel link:">
            <LinksScreen />
          </ProfileDescriptionInfo>
          <ProfileDescriptionInfo heading="Academic Qualification:">
            <ProfileDescription descriptionList={profEducationList} />
          </ProfileDescriptionInfo>
          <ProfileDescriptionInfo heading="Professional Experience:">
            <ExperienceScreen expList={expList}/>
          </ProfileDescriptionInfo>
          <ProfileDescriptionInfo heading="Project Summary:">
          <ProjectScreen projectList={projectList}/>
          </ProfileDescriptionInfo>
          
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle:"My Profile",
   
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
    ),
    headerRight: (
      <View style={styles.rightHeader}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('../assets/images/splash.png')} />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile: {
    padding: 1
  },
  scrollView: {
    marginVertical: 2
  },
  rightHeader:{
    marginRight:4
  }
 
});
