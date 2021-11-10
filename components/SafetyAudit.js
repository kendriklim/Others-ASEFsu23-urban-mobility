import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const SafetyAudit = () => {
  const [text, setText] = React.useState('');

  return (
    <Card>
  <Card.Title title="SAFETY AUDIT FORM" />
    <Card.Content>
    <Title>Fill out this form to report incodents</Title>

      <TextInput
      mode="outlined"
      label="Enter Name"
      right={<TextInput.Affix text="/100" />}
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
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>SUBMIT</Button>
    </Card.Actions>
  </Card>

  );
};

export default SafetyAudit;
// import React from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import tw from "tailwind-react-native-classnames";
// import { Icon,Button ,Input ,Card} from "react-native-elements";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// const SafetyAudit = ({navigation}) => {
//   const users = [
//     {
//        name: 'brynn',
//        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//     }]

//   const Stack = createNativeStackNavigator();

//   return (
//     <View style={tw`bg-white`}>
//       <View style={tw`p-5`}>
//         <Image
//           style={{ width: 100, height: 50, resizeMode: "contain" }}
//           source={{
//             uri: "https://links.papareact.com/gzs",
//           }}
//         />
//       </View>

//       <View
//         style={tw`flex-row items-center justify-around border-gray-800 border-b-2`}
//       >
//         <TouchableOpacity
//           style={tw`flex flex-row bg-gray-800 pb-2 pt-3 px-4 items-center rounded-t-xl shadow-xl `}
//         >
//           <Icon name="car" type="ionicon" color="white" size={16} />
//           <Text style={tw`ml-1 text-white`}>Rides</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={tw`flex flex-row bg-white pb-2 pt-3 px-4 items-center rounded-full `}
//         >
//           <Icon
//             name="fast-food-outline"
//             type="ionicon"
//             color="black"
//             size={16}
//           />
//           <Text style={tw`ml-1 text-black`}>Eats</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={tw`flex flex-row bg-gray-800 pb-2 pt-3 px-4 items-center rounded-t-xl shadow-xl `}
//         >
//                   <Button  
//           title="Safety audit"  
//           onPress={() => navigation.navigate('SafetyAudit')}  
//         />        
//           </TouchableOpacity>
 
//       </View>
//       <View>
//       <Card>
//   <Card.Title>Fill this form to report an incident that needs immediate action</Card.Title>
//   <Card.Divider/>

 
//         <View >
    
//     <Input   styles={{
//               container: { flex: 0 },
//               textInput: {
//                 fontSize: 18,
//               },
//             }}
//   placeholder='Your name'
// />


//           <Input    styles={{
//               container: { flex: 0 },
//               textInput: {
//                 fontSize: 18,
//               },
//             }} leftIcon={{ type: 'font-awesome', name: 'compass' }} placeholder='Get Current location'></Input>

//         </View>


// </Card>

//       </View>
//     </View>
 
//   );
// };

// export default SafetyAudit;
