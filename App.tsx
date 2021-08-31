import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import TodoItem, { Todo } from "./components/TaskItem/TodoItem";
import Input from "./components/InputItem/Input";
import Header from "./components/Header/header";

export default function App() {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Todo>>([]);

  const onChangeTodo = () => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      { text, id: new Date().getTime() },
    ]);
  };

  const onChangeTask = (text: string) => {
    setText(text);
  };
  const removeTask = (id: number) => {
    setTodoList((todoList) => {
      const tempList = [...todoList];
      const todo = tempList.find((o) => o.id === id);
      if (todo) {
        const index = tempList.indexOf(todo);
        if (index > -1) {
          tempList.splice(index, 1);
        }
      }
      return tempList;
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Header />
        <View style={styles.items}>
          <ScrollView
            style={styles.scrollView}
            decelerationRate={"fast"}
            showsVerticalScrollIndicator={false}
          >
            {todoList.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} removeTask={removeTask} />
            ))}
          </ScrollView>
        </View>
      </View>
      <Input changeText={onChangeTask} pressButton={onChangeTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5eaea",
  },
  scrollView: {
    maxHeight: "100%",
  },
  tasksWrapper: {
    width: "100%",
    paddingTop: "30%",
    paddingBottom: "50%",
    paddingHorizontal: "5%",
  },
  items: {
    marginTop: 30,
  },
});
