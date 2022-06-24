import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const UserData = () => {
  return (
    <View style={styles.main_container}>
      <Text style={styles.txt}>This Component is Under Construction</Text>
      <Image
        resizeMode="contain"
        style={styles.pro_img}
        source={require("../img/progress.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    marginTop: 80,
    textAlign: "center",
    fontSize: 20,
  },
  pro_img: {
    width: "90%",
  },
});
export default UserData;
