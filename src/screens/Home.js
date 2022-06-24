import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Image
          resizeMode="contain"
          style={styles.mainimg}
          source={require("../../src/img/main.jpg")}
        />
        <View style={styles.txt_box}>
          <Text style={styles.welcome_txt}>welcome to</Text>
          <Text
            style={[
              styles.welcome_txt,
              { fontSize: 30, color: "#4c5dab", marginTop: 5 },
            ]}
          >
            taimul's online center
          </Text>
          <Text style={styles.subtitle_txt}>
            An online based platfrom for civil engineers
          </Text>
        </View>
      </View>
      <View style={styles.menu_style}>
        <View style={styles.linestyle}></View>
        <Menu />
        <View style={[styles.linestyle, { marginVertical: 10 }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  topcontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainimg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 70,
    borderRadius: 20,
  },
  txt_box: {
    marginTop: 50,
  },
  welcome_txt: {
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
  subtitle_txt: {
    fontSize: 15,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 10,
    color: "#7d7d7d",
    paddingBottom: 50,
  },
  linestyle: {
    borderWidth: 0.5,
    marginBottom: 10,
    borderColor: "grey",
  },
});

export default Home;
