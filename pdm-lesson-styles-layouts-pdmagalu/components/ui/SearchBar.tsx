import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="dimgrey" />
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    marginVertical: 8,
    padding: 8,
    borderRadius: 16,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
});
