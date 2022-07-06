import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import LogIn from "./LogIn.js";

const SignUp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigation.navigate("Home");
  //     } else {
  //       navigation.navigate("LogIn");
  //     }
  //   });
  // }, []);

  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       navigation.navigate("LogIn");
  //     })
  //     .catch((error) => {});
  // };

  const handleUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        alert(`Registration Successful ${name}`);
        setIsSignedIn(true);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        sendEmailVerification(auth.currentUser);
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert("Sorry! Unsuccessful Registration");
        console.log(error.code);
      });

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //   })
    //   .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.main_logo_container}>
        <Image style={styles.main_logo} source={require("../img/Logo.png")} />
      </View>

      <KeyboardAvoidingView style={styles.key_content} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Enter Your Name..."}
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Email Address..."}
            value={email}
            onChangeText={(email) => setEmail(email)}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Password"}
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
          />
        </View>
        <View style={styles.main_button_container}>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={handleUser} style={styles.button}>
              <Text style={styles.button_txt}>Registration</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LogIn")}
              style={styles.button}
            >
              <Text style={styles.button_txt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  main_logo_container: {
    alignItems: "center",
  },
  main_logo: {
    width: 350,
    height: 250,
    marginTop: 50,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
    width: "100%",
  },
  inputContainer: {
    marginTop: 10,
  },
  main_button_container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button_container: {
    marginTop: 5,
    width: "60%",
  },
  button: {
    backgroundColor: "#4630EB",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    borderRadius: 10,
  },
  button_txt: {
    color: "#fff",
    fontSize: 18,
  },
});
export default SignUp;
