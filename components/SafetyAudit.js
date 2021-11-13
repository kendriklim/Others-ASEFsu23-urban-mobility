import React, {useState} from 'react';
import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph ,View,Platform,Text} from 'react-native-paper';
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import FormButton from './FormButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
StyleSheet,SafeAreaView
} from "react-native";
import { TextInputMask } from 'react-native-masked-text'


const SafetyAudit = ({navigation}) => {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const changeSelectedDate = (event, selectedDate) => { const currentDate = selectedDate || mydate;
    setDate(currentDate);
    };
const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};
const displayDatepicker = () => {
  showMode('date');
};
const [dateOfBirth, setDateOfBirth] = useState('');
  const checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  };
  const handleDateOfBirth = value => {
    var input = value;
    let currentYear = new Date().getFullYear();
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1]) values[1] = checkValue(values[1], 12);
    if (values[2]) values[2] = checkValue(values[2], currentYear);

    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + ' / ' : v;
    });
    value = output.join('').substr(0, 20);
    setDateOfBirth(value);
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
        label="Enter date and time of issue occurence"
        value={dateOfBirth}
        placeholder={'DD/MM/YYYY HH:MM'}
        underlineColor={'#FFFFFF'}
        selectionColor={'#000'}
        keyboardType="number-pad"
        maxLength={20}
        returnKeyType="done"
        spellCheck={false}
        autoCorrect={false}
        mode="outlined"
        left={<TextInput.Icon name="timetable" />}
        style={{
          fontSize: 16,
          backgroundColor: '#fff',
          color: '#000',
          paddingHorizontal: 0,
        }}
        onChangeText={val => handleDateOfBirth(val)}
      />
       {/* <TextInput
          mode="outlined"
          label="Enter date and time of issue occurence"
          left={<TextInput.Icon name="timetable" />}>
       </TextInput> */}
       {/* <TextInput
          mode="outlined"
          label="Enter date and time of issue occurence"
          left={<TextInput.Icon name="timetable" />}>
       </TextInput> */}
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