// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const About = () => {
//   return (
//     <View>
//       <Text>About</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});
// export default About;

import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={[styles.mainHeader, { fontSize: 22 }]}>
        {" "}
        Md.Taimul Hossain{" "}
      </Text>
      <Text style={[styles.paraStyle, { textAlign: "center" }]}>
        {" "}
        Junior Instructor at Dinajpur Polytechnic Institute{" "}
      </Text>

      <View>
        <Image
          style={styles.imgStyle}
          resizeMode="contain"
          source={require("../img/auout_img.jpg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/taimul.hossain.9")
          }
        >
          <Image
            style={styles.iconStyle}
            source={require("../img/facebook.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("")}
        >
          <Image
            style={styles.iconStyle}
            source={require("../img/instagram.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("")}
        >
          <Image
            style={styles.iconStyle}
            source={require("../img/whatsapp.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 15,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "JosefinSans_700Bold",
  },
  paraStyle: {
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  aboutSubHeader: {
    fontSize: 15,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 10,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 40,
    aspectRatio: 1,
  },
});

export default About;
