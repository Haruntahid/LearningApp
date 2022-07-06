import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../../screens/Home";
import About from "../../screens/About";
import Contact from "../../screens/Contact";
import Course from "../../screens/Course";
import UserData from "../../screens/UserData";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import CustomDrawer from "../CustomDrawer";
import SignUp from "../../screens/SignUp";
import LogIn from "../../screens/LogIn";
import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../../screens/Profile";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitle: "Home",
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="LogIn" component={LogIn} />
      <Drawer.Screen name="Course" component={Course} />
      <Drawer.Screen name="Students" component={UserData} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});
export default AppStack;
