import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";
import { Icon } from "react-native-elements";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements/dist/buttons/Button";
import SafetyAudit from "../components/SafetyAudit";
import SampleApp from '../components/SampleApp'

const SearchPlace = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
     <SampleApp />
     
      {/* <NavOptions /> */}
{/* <SafetyAudit /> */}
      <View style={tw`p-5 h-full bg-gray-200`}>
        <View style={tw`p-2 w-full`}>
          <GooglePlacesAutocomplete
            placeholder={"Where from?"}
            styles={{
              container: { flex: 0 },
              textInput: {
                fontSize: 18,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              dispatch(setDestination(null));

              navigation.navigate("MapScreen");
            }}
            fetchDetails={true}
            retrunKeyType={"search"}
            enablePoweredByContainer={false}
            minLenght={2}
            query={{
              key: "AIzaSyDgn5900zen3QjId3BBxov06BkvuLNl9jw",
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
          />
        </View>
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default SearchPlace;