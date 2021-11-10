import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
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
            backgroundColor: '#a6e4d0',
            image: <Image  style={{width: '50%', height: '50%'}} source={{uri:'https://raw.githubusercontent.com/itzpradip/react-native-firebase-social-app/master/assets/onboarding-img1.png'}} />,
            title: 'Walk Saath!',
            subtitle: 'A New Way To Connect With The World while walking safely home',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image  style={{width: '50%', height: '50%'}} source={{uri:'https://raw.githubusercontent.com/itzpradip/react-native-firebase-social-app/master/assets/onboarding-img1.png'}} />,
            title: 'Get rescued during emergency',
            subtitle: 'We have a highly active volunteer network that will ocme to help you during emergency',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image  style={{width: '50%', height: '50%'}} source={{uri:'https://raw.githubusercontent.com/itzpradip/react-native-firebase-social-app/master/assets/onboarding-img1.png'}} />,
            title: 'Report civil incidents to authorities ',
            subtitle: "We have a safety audit form for you",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});