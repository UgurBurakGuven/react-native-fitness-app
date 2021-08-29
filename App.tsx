import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import Task from "./components/TaskItem/Task";
import Input from "./components/InputItem/Input";
import Header from "./components/Header/header";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Header />
        <View style={styles.items}>
          <Task text={"Tast 1"} />
          <Task text={"Tast 2"} />
        </View>
      </View>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    width: "100%",
    paddingTop: "40%",
    paddingHorizontal: "5%",
  },
  items: {
    marginTop: 30,
  },
});
