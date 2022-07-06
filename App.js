import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import SignUp from "./src/screens/SignUp";
import LogIn from "./src/screens/LogIn";
import Menu from "./src/components/Menu";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import CustomDrawer from "./src/components/CustomDrawer";
import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./src/components/Authentication/AppStack";
import AuthStack from "./src/components/Authentication/AppStack";

const App = () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
