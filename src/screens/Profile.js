import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View>
      <View style={styles.main_logo_container}>
        <Image
          resizeMode="contain"
          style={styles.main_logo}
          source={require("../img/profile.png")}
        />
        <Text style={styles.main_txt}>Harun Tahid</Text>
        <Text style={styles.details_txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          dolor!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  main_logo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 50,
  },
  main_logo_container: {
    alignItems: "center",
  },
  main_txt: {
    fontSize: 25,
    marginTop: 20,
  },
  details_txt:{
    textAlign: "center"
  }
});
export default Profile;
