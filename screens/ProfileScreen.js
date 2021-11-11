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

const ProfileScreen = ({navigation, route}) => {

 


  return (
      <SafeAreaView>
        <View>
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:20,marginTop:15}}>YOUR PROFILE</Text></View>
     <Card>


<Avatar
        containerStyle={{marginBottom: 20,marginLeft:90}}
        size="xlarge"
        rounded
        source=
        {{
          uri:
            'https://c8.alamy.com/comp/JAM81P/beautiful-muslim-woman-in-hijab-closing-her-eyes-vector-flat-icon-JAM81P.jpg',
        }}
      />

     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,marginTop:15,color:"#f0ada4"}}>Name: Jane Doe</Text>
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,marginTop:15,color:"#f0ada4"}}>Address: Ayesha street,Lahore</Text>
     <Text style={{textAlignVertical: "center",textAlign: "center",fontSize:18,marginTop:15,color:"#f0ada4"}}>Contact number:1231231231</Text>

     </Card>
      </SafeAreaView>
  );
};

export default ProfileScreen;

