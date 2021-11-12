import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon,Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafetyAudit} from './SafetyAudit';
import { useNavigation} from "@react-navigation/native";

const NavOptions = ({}) => {


  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white`}>
    <TouchableOpacity
      style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width:200,
          height:200,
          backgroundColor:'#cd5c5c',
          borderRadius:100,
          marginLeft:100,
          marginBottom:40
        }}
        onPress={() => { navigation.navigate("VolunteerScreen"); }}
    >
      <Icon name="alert-outline" type="ionicon" color="white"  size={30} /><Text    style={{ marginLeft:10 ,marginRight:10,textAlign:"center" ,textDecorationStyle:"solid",color:"white"
        }} >RESCUE VOLUNTEER BULAO</Text>
    </TouchableOpacity>
   
       </View>
  );
};

export default NavOptions;
