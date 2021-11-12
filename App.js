import React from "react";
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import Onboarding from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import SearchPlace from "./screens/SearchPlace";
import VolunteerScreen from "./screens/VolunteerScreen";
import CallScreen from "./screens/CallScreen";

import { store } from "./store";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="OnboardingScreen"
                component={Onboarding}
                options={{ headerShown: false }}
              />
                  <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
                 <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="SearchPlace"
                component={SearchPlace}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VolunteerScreen"
                component={VolunteerScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CallScreen"
                component={CallScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}