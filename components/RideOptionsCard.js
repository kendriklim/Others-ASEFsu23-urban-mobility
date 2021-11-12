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
    title: "Alina",
    multiplier: 1,
    image: "https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/female.png",
  },
  {
    id: "Uber-XL-456",
    title: "Salman",
    multiplier: 1.2,
    image: "https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/male1.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Hussain",
    multiplier: 1.75,
    image: "https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/male2.png",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-yellow-100 flex-1`}>
      <View style={tw`flex-row items-center p-2 bg-yellow-100`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute z-10 px-4`}
        >
          <Icon name="arrow-back" type="ionicon" color="black" size={24} />
        </TouchableOpacity>
        <Text style={tw`w-full font-semibold text-center text-xl bg-yellow-100`}>
         You can walk with {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, multiplier, image, title }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row bg-yellow-100 justify-around items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                marginBottom:10,
                overflow: "hidden",
                borderWidth: 1,
                borderRadius: 100,
                // borderColor: "black",
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />

            <View>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-lg`}>
              5 <Icon name="star" color="#e8602e"></Icon>
              {/* {(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                100
              ).toFixed(2)} */}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        disabled={!selected}
        style={tw`bg-red-500 py-3 ${!selected && "bg-red-300"}`}
      >
        <Text style={tw`text-center text-white font-semibold text-base `}>
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
