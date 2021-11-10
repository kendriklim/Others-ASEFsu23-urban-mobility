

import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from './ChatScreen'
import SearchPlace from './SearchPlace';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
import SafetyAudit from '../components/SafetyAudit'
import ProfileScreen from './ProfileScreen'

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      barStyle={{ backgroundColor: '#f0ada4' }}
    >
      <Tab.Screen
        name="Home"
        component={SearchPlace}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#f0ada4',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#f0ada4',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbox-ellipses-outline" color={color} size={26} />
          ),
        }}
      />
 <Tab.Screen
        name="SafetyAudit"
        component={SafetyAudit}
        options={{
          tabBarLabel: 'SafetyAudit',
          tabBarColor: '#f0ada4',
          tabBarIcon: ({ color }) => (
            <Icon name="alert-circle-outline" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#f0ada4',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

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