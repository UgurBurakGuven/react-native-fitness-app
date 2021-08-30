import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Task from "./components/TaskItem/Task";
import Input from "./components/InputItem/Input";
import Header from "./components/Header/header";

export default function App() {
  const [task, setTask] = useState<any>();
  const [todo, setTodo] = useState<Array<string | number>>([]);

  const onChangeTask = (text: string) => {
    setTask(text);
  };

  const onChangeTodo = () => {
    setTodo([...todo, task]);
    setTask(null);
  };

  const removeTask = (index: number) => {
    const itemsCopy: any = [...todo];
    itemsCopy.splice(index, 1);
    setTodo(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Header />
        <View style={styles.items}>
          {todo.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => removeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
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
