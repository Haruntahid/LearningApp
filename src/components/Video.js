import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      {" "}
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />{" "}
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />{" "}
    </View>
  );
};

const styles = StyleSheet.create({});
export default Video;
