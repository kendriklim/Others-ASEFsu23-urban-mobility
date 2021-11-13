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
      lat: 31.521920,
      lng: 74.319458,
    },
    description: "172-D, Rehmanpura Colony, Lahore",
  },
  {
    id: "8",
    icon: "train-outline",
    label: "Metro station",
    location: {
      lat: 31.519963147574664,
      lng: 74.32558147800962,
    },
    description: "Canal north metro station",
  },
  {
    id: "9",
    icon: "bus-outline",
    label: "Bus stop",
    location: {
      lat: 31.51725045809368,
      lng: 74.31633169370318,
    },
    description: "Naqsha Bus stop",
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