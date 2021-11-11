import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const data = [
  {
    id: "7",
    icon: "home",
    label: "Home",
    location: {
      lat: 31.51996749324847,
      lng: 74.32559670041191,
    },
    description: "Canal North Metro Station",
  },
  {
    id: "8",
    icon: "briefcase",
    label: "Work",
    location: {
      lat: 31.51801782665679,
      lng: 74.32168794095695,
    },
    description: "Ayesha Street",
  },
  {
    id: "9",
    icon: "school",
    label: "Library",
    location: {
      lat: 51.4995,
      lng: -0.1034399,
    },
    description: "Library Street, London, UK",
  },
];

const NavFavourites = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const origin = useSelector(selectOrigin);

  const route = useRoute();

  return (
    <SafeAreaView>
      <FlatList
        style={tw`px-6`}
        data={
          route.name !== "SearchPlace"
            ? data.filter((fav) => fav.description !== origin?.description)
            : data
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item: { label, description, location, icon } }) => (
          <TouchableOpacity
            style={tw`flex-row items-center rounded-full bg-white mb-2 p-2`}
            onPress={() => {
              console.log(route.name)
              if (route.name ==="SearchPlace") {
                dispatch(
                  setOrigin({
                    location: location,
                    description: description,
                  })
                );

                navigation.navigate("MapScreen");
              }

              if (route.name === "NavigateCard") {
                dispatch(
                  setDestination({
                    location: location,
                    description: description,
                  })
                );

                navigation.navigate("RideOptionsCard");
              }
            }}
          >
            <Icon
              style={tw`mr-4 rounded-full bg-gray-500 p-2`}
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold`}>{label}</Text>
              <Text>{description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default NavFavourites;