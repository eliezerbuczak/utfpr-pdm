import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function AddressBar() {
  return (
    <View style={styles.container}>
      <Entypo name="location-pin" size={16} color="white" />
      <Text style={styles.text}>Enviar para Guarapuava 88888-222</Text>
      <AntDesign name="right" size={16} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#1C77E0",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});
