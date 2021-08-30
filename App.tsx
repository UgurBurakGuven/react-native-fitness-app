import React, { Props, useState } from "react";
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
  const [task, setTask] = useState<any>();
  const [todo, setTodo] = useState<Array<string>>([]);

  const onChangeTask = (text: string) => {
    setTask(text);
  };

  const onChangeTodo = () => {
    setTodo([...todo, task]);
    setTask(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Header />
        <View style={styles.items}>
          {todo.map((item, index) => (
            <Task key={index} text={item} />
          ))}
        </View>
      </View>
      <Input changeText={onChangeTask} pressButton={onChangeTodo} />
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
