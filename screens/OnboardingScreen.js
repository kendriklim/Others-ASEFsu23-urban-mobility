import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#b8bbf1',
            image: <Image  style={{width: 200, height: 400,resizeMode:'contain',marginBottom:0}} source={require('../assets/1.png')} />,
            title:<Text  style={{fontSize:30 ,fontFamily: "arial",fontWeight:"bold",marginBottom:30,color:"#e8602e"}}>WalkSaath!</Text>,
            subtitle:<Text  style={{fontSize:15 ,fontFamily: "arial",marginBottom:25,color:"black",alignContent:"center",alignItems:"center",textAlign:"center"}}>Connect with your community to get home safely</Text>,
          },
          {
            backgroundColor: '#8a8ff0',
            image: <Image  style={{width: 200, height: 400,resizeMode:'contain'}} source={require('../assets/2.png')} />,
            title: <Text  style={{fontSize:25 ,fontFamily: "arial",fontWeight:"bold",marginBottom:25,color:"#fcc83c",alignContent:"center",alignItems:"center",textAlign:"center"}}>Get community rescue
            in emergency</Text>,
            subtitle:<Text  style={{fontSize:15 ,fontFamily: "arial",marginBottom:25,color:"black",alignContent:"center",alignItems:"center",textAlign:"center"}}>A watchful volunteer network to help you in emergency</Text>,
          },
          {
            backgroundColor: '#b8bbf1',
            image: <Image  style={{width: 200, height: 400,resizeMode:'contain'}} source={require('../assets/3.png')} />,
            title:  <Text  style={{fontSize:25 ,fontFamily: "arial",fontWeight:"bold",marginBottom:25,color:"#1e3181",alignContent:"center",alignItems:"center",textAlign:"center"}}>Safety audit your streets</Text>,
            subtitle:<Text  style={{fontSize:15 ,fontFamily: "arial",marginBottom:25,color:"black",alignContent:"center",alignItems:"center",textAlign:"center"}}>Send your report to the local authorities to keep your streets safe</Text>,
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    fontFamily:"",
    color:"red"
  },
});