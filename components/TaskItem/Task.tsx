import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";

type TaskItemProps = {
  text: string | number;
};

function Task({ text }: TaskItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

export default Task;
