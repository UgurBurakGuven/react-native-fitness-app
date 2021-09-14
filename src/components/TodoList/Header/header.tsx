import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

type headerProps = {
  counter: number;
};

export default function Header({ counter }: headerProps) {
  return (
    <View>
      <View style={styles.counterBox}>
        <Text style={styles.counter}>{counter}</Text>
      </View>

      <Text style={styles.sectionTitle}>Yapılacaklar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    zIndex: 1,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  counter: {
    color: "#EC8C0E",
    fontSize: 75,
    fontWeight: "bold",
  },
  counterBox: { zIndex: 1, position: "absolute", top: -40 },
});
