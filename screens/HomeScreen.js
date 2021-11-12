

import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from './ChatScreen'
import SearchPlace from './SearchPlace';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
import SafetyAudit from '../components/SafetyAudit'
import ProfileScreen from './ProfileScreen'
import  { useState, useEffect } from 'react';

const Tab = createMaterialBottomTabNavigator();
import { BackHandler } from 'react-native';





const HomeScreen = ({navigation}
  
) => {
return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      barStyle={{ backgroundColor: '#f7c4b2' }}
    >
      <Tab.Screen
        name="SearchPlace"
        component={SearchPlace}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#f7c4b2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
     


<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#f7c4b2',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Notifications"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#f7c4b2',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbox" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="SafetyAudit"
        component={SafetyAudit}
        options={{
          tabBarLabel: 'SafetyAudit',
          tabBarColor: '#f7c4b2',
          tabBarIcon: ({ color }) => (
            <Icon name="document-text" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);}

export default HomeScreen;



// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#ffffff',
//         },
//         headerTintColor: 'red',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>
// );