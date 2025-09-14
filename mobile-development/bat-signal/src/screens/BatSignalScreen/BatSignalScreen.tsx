import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
const BAT_LOGO_PATH = "../../../assets/bat-logo-v2.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import {styles} from "./BatSignalScreenStyles";

type Props = NativeStackScreenProps<RootStackParamList, "BatSignal">;

export default function BatSignalScreen({ navigation }: Props) {
  const handlePress = () => {
    navigation.navigate("BatForm");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require(BAT_LOGO_PATH)}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>activate bat signal</Text>
      </TouchableOpacity>
    </View>
  );
}