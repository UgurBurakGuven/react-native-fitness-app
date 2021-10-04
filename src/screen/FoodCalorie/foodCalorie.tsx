import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import BreakFast from "./breakFast";
import Lunch from "./lunch";

function FoodCalorie() {
  const [totalCalories, setTotalCalories] = useState<number>(0);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BreakFast />
        <Lunch />
        <Lunch />
        <Lunch />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
  },
  scrollView: { maxHeight: "98%" },
});

export default FoodCalorie;
