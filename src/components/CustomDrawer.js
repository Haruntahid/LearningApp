import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { auth } from "../../Firebase";

const user = auth.currentUser;

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#4c5dab" }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={require("../img//menubg.png")}
            style={{
              resizeMode: "cover",
              height: 100,
              width: 200,
              marginVertical: 30,
            }}
          ></ImageBackground>
        </View>
        <View style={{ backgroundColor: "#fff", paddingTop: 15 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {/* <View>
        <Text>Developed By Vixingo Tech</Text>
        <Text> {user ? user.email : ""}</Text>
      </View> */}
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
