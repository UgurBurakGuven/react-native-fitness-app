import React, { useState } from "react";
import { Button, Keyboard, ScrollView, View } from "react-native";
import TodoItem, { Todo } from "../../components/TodoList/TaskItem/TodoItem";
import Input from "../../components/TodoList/InputItem/Input";
import Header from "../../components/TodoList/Header/header";
import Home from "../Home/Home";
import { RootStackParamList } from "../RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "TodoList">;

export default function TodoList() {
  const navigation = useNavigation<homeScreenProp>();
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Todo>>([]);

  function keyboardDismiss() {
    Keyboard.dismiss();
  }

  const onChangeTodo = () => {
    keyboardDismiss();
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
      <View style={styles.tasksWrapper} onTouchStart={() => keyboardDismiss()}>
        <Header />
        <View style={styles.items}>
          <Button
            title={"go to Home"}
            onPress={() => navigation.navigate("Home")}
          />
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
