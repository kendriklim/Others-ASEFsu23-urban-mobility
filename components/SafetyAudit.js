import React, {useState} from 'react';
import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph ,View,Platform,Text} from 'react-native-paper';
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import FormButton from './FormButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
StyleSheet,SafeAreaView
} from "react-native";
const SafetyAudit = ({navigation}) => {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const changeSelectedDate = (event, selectedDate) => {
  const currentDate = selectedDate || mydate;
  setDate(currentDate);
};
const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};
const displayDatepicker = () => {
  showMode('date');
};

  return (
    <Card style={{backgroundColor:"#b8bbf1",height:ScreenHeight}}>
  <Text style={{fontSize:30,fontStyle:"bold",alignContent:"center",alignItems:"center",alignSelf:"center",marginBottom:10,marginTop:10}}  >SAFETY AUDIT</Text>
    <Card.Content>
    <Text  style={{fontSize:20,fontStyle:"bold",alignContent:"center",alignItems:"center",alignSelf:"center",marginBottom:10,marginTop:10}}>Fill this form to report incidents</Text>

      <TextInput
      mode="outlined"
      label="Enter Name"
      left={<TextInput.Icon name="rename-box" />}
    />
      <TextInput
      mode="outlined"
      label="Enter Address"
      left={<TextInput.Icon name="crosshairs-gps" />}
    />
      <TextInput
      mode="outlined"
      label="Enter contact number"
      left={<TextInput.Icon name="phone" />}
    />
        
         <TextInput
      mode="outlined"
      label="Describe the issue"
      left={<TextInput.Icon name="alert" />}
    />
       <TextInput
       mode="outlined"
      label="Enter date and time of issue occourance"
      left={<TextInput.Icon name="timetable" />}>
       </TextInput>

         </Card.Content>
 
    <Card.Actions style={{alignContent:"center",alignSelf:"center",alignItems:"center"}}>

    <FormButton
        buttonTitle="Submit"
        onPress={() => navigation.navigate("SubmitScreen")}
        
      />
    </Card.Actions>
  </Card>

  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center"
  },
});

export default SafetyAudit;