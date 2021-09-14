import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TodoItem, { Todo } from "../../components/TodoList/TaskItem/TodoItem";
import Header from "../../components/TodoList/Header/header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TodoList() {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [counter, setCounter] = useState<number>(todoList.length);
  const textInput = React.createRef<TextInput>();

  useEffect(() => {
    syncTodoList();
  }, []);
  useEffect(() => {
    setCounter(todoList.length);
  }, [todoList]);

  async function getTodoListFromStorage(): Promise<Todo[]> {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue ? JSON.parse(jsonValue) : [];
  }

  async function syncTodoList() {
    setTodoList(await getTodoListFromStorage());
  }

  async function storeData(value: Todo[]) {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
    syncTodoList();
  }

  async function saveTodo() {
    Keyboard.dismiss();
    if (text != "") {
      setTodoList((currentTodoList) => {
        const newTodoList = [
          ...currentTodoList,
          { text, id: new Date().getTime() },
        ];
        storeData(newTodoList);
        textInput.current!.clear();
        setText("");
        return newTodoList;
      });
    }
  }

  async function removeTask(id: number) {
    const todoListFromStorage = await getTodoListFromStorage();
    const todo = todoListFromStorage.find((it) => it.id === id);
    if (todo) {
      const index = todoListFromStorage.indexOf(todo);
      if (index > -1) {
        todoListFromStorage.splice(index, 1);
      }
    }

    await storeData(todoListFromStorage);
    await syncTodoList();
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper} onTouchStart={Keyboard.dismiss}>
        <Header counter={counter} />
        <View style={styles.items}>
          <ScrollView
            style={styles.scrollView}
            decelerationRate={"fast"}
            showsVerticalScrollIndicator={false}
          >
            {todoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} removeTask={removeTask} />
            ))}
          </ScrollView>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Lütfen notunuzu giriniz"}
          onChangeText={setText}
          onSubmitEditing={saveTodo}
          ref={textInput}
        />
        <TouchableOpacity onPress={saveTodo}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5eaea",
  },
  scrollView: {
    maxHeight: "98%",
  },
  tasksWrapper: {
    width: "100%",
    paddingTop: "10%",
    paddingBottom: "30%",
    paddingHorizontal: "5%",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: "3%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#82d7f7",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
