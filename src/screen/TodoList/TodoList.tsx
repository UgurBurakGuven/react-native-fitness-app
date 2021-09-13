import React, { useEffect, useState } from "react";
import { Button, Keyboard, ScrollView, Text, View } from "react-native";
import TodoItem, { Todo } from "../../components/TodoList/TaskItem/TodoItem";
import Input from "../../components/TodoList/InputItem/Input";
import Header from "../../components/TodoList/Header/header";
import Home from "../Home/Home";
import { RootStackParamList } from "../RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "TodoList">;

export default function TodoList() {
  const [deneme, setDeneme] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const navigation = useNavigation<homeScreenProp>();
  /*
  useEffect(() => {
    getData();
  }, []);

  /* ---------
  const storeData = async () => {
    if (deneme) {
      await AsyncStorage.setItem("title", deneme);
    } else {
      console.log("cant save");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("title");
      if (value !== null) {
        setDeneme(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  function denemeset() {
    setDeneme("burak");
    console.log("state güncellendi : " + deneme);
  }

   ---------  */

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
          {/*
          <Button
            title={"go to Home"}
            onPress={() => navigation.navigate("Home")}
          />

            <Button title={"stategüncelle"} onPress={denemeset}/>
            <Button title={"storageDAta"} onPress={storeData} />
            <Button title={"getData"} onPress={getData} />*/}
          <Text> {deneme}</Text>
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
