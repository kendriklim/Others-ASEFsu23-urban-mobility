import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Card, ListItem, Button, Icon,Avatar } from 'react-native-elements'
import tw from "tailwind-react-native-classnames";

const ProfileScreen = ({navigation, route}) => {

 


  return (
      <SafeAreaView>
        <View >
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:20,marginTop:15,borderRadius:10}}>YOUR PROFILE</Text></View>
     <Card style={{borderRadius:"15px"}}>


<Avatar
        containerStyle={{marginBottom: 20,marginLeft:90}}
        size="xlarge"
        rounded
        source={require('../assets/profile_pic.png')}
      />

     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,marginTop:15,color:"#000000",marginBottom:5}}>Name :  Fatima Khan</Text>
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,color:"#000000",marginBottom:5}}></Text>
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,color:"#000000",marginBottom:5}}>Address:172-D, Rehmanpura Colony, Lahore</Text>
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,marginTop:15,color:"#000000"}}>Contact number : +92333999999</Text>

     </Card>
      </SafeAreaView>
  );
};

export default ProfileScreen;

