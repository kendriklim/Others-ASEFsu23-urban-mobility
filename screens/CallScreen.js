import tw from "tailwind-react-native-classnames";
import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Slider,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image1: {
    width: 350,
    height: 200,
    position: 'relative',
    marginTop: 10,
  },
  image2: {
    width: 75,
    height: 75,
  },
  image3: {
    width: 200,
    height: 200,
  },
  image4: {
    width: 80,
    height: 80,
  },
  iconContainer: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
});

const CallScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  // Initial scale value of 1 means no scale applied initially.
    const animatedButtonScale = new Animated.Value(1);

    // When button is pressed in, animate the scale to 1.5
    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
        }).start();
    };

    // When button is pressed out, animate the scale back to 1
    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    // The animated style for scaling the button within the Animated.View
    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };

  return (
    <SafeAreaView style={tw`bg-white `}>
      <View style={tw`flex-row items-center p-2 bg-white`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute z-20 px-4`}
        >
          <Icon name="arrow-back" type="ionicon" color="black" size={24} />
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'flex-start', alignItems: 'center', marginTop: 50}}>
        <Image
        style={styles.image1}
        source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/message.png'}}
        />
        <Text style={tw`italic font-bold absolute top-20 bottom-10 flex justify-center text-center left-10 right-10 text-xl`}>Alina has accepted your request.
         She will be there in 2 minutes</Text>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'flex-end'}}>
        <Image
        style={styles.image3}
        source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/female1.png'}}
        />
      </View>
      
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 190}}>
        <TouchableOpacity
          style={{
              alignItems:'center',
              justifyContent:'center',
            }}
        >
         <Image
          style={styles.image2}
          source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/call1.png'}}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              alignItems:'center',
              justifyContent:'center',
            }}
            onPress={() => { navigation.navigate("ChatScreen"); }}
        >
          <Image 
          style={styles.image4}
          source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/message5.png'}}
          />
          
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default CallScreen;
