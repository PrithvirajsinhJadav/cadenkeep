import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />

      <Text style={styles.headerText}> Caden Keep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerText: {
    fontWeight: "bold",
    position: "absolute",
    fontSize: 25,
    color: "#333",
    letterSpacing: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
