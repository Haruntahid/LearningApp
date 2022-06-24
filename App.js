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
import DrawerNav from "./src/components/DrawerNav";

import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { createDrawerNavigator } from "@react-navigation/drawer";

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="LogIn" component={LogIn} />
//       {/* <Drawer.Screen name="Article" component={Article} /> */}
//     </Drawer.Navigator>
//   );
// }

const App = () => {
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

  // const navigation = useNavigation();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigation.navigate("Home");
  //     } else {
  //     }
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="Course" component={Course} />
        <Drawer.Screen name="UserData" component={UserData} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
