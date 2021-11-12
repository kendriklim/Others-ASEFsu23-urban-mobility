import tw from "tailwind-react-native-classnames";
import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "Samna",
    multiplier: 1,
    image: "https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/female.png",
  },
  {
    id: "Uber-XL-456",
    title: "Kendrik",
    multiplier: 1.2,
    image: "https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/male1.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Eric",
    multiplier: 1.75,
    image: "https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/male2.png",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const VolunteerScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`flex-row items-center p-2 bg-white`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute z-10 px-4`}
        >
          <Icon name="arrow-back" type="ionicon" color="black" size={24} />
        </TouchableOpacity>
        <Text style={tw`w-full font-semibold text-center text-xl`}>
          Select a Volunteer 
        </Text>
      </View>
      <Image source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/volunteer.png'}}
       style={{width: 410, height: 400}} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, multiplier, image, title }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row bg-white justify-around items-center px-10 ${
              id === selected?.id && "bg-red-500"
            }`}
          >
            <Image
              style={{
                width: 75,
                height: 75,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />

            <View>
              <Text style={tw`text-lg font-semibold `}>{title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        disabled={!selected}
        style={tw`bg-red-500 py-2 ${!selected && "bg-green-400"} `}
        onPress={() => { navigation.navigate("CallScreen"); }}
      >
        <Text style={tw`text-center rounded-lg bg-opacity-75 text-xl`}>
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VolunteerScreen;
