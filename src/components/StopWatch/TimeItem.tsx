import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export interface Time {
  cuttedTime: number | string;
}

type TimeItemProps = {
  time: Time;
};

function TimeItem({ time }: TimeItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <Text>{time.cuttedTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
    height: 100,
    flexDirection: "row",
    backgroundColor: "red",
    marginHorizontal: 30,
    marginTop: 30,
  },
  element: {
    width: "90%",
  },
});

export default TimeItem;
