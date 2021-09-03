import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export interface Todo {
  id: number;
  text: string;
}
type TodoItemProps = {
  todo: Todo;
  removeTask: (val: number) => void;
};

function TodoItem({ todo, removeTask }: TodoItemProps) {
  const [colorState, setColorState] = useState<string>("");
  const changeStatus = (color: string) => {
    setColorState(color);
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View
          style={{
            backgroundColor: colorState ? colorState : "grey",
            width: 24,
            height: 24,

            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,
          }}
        >
          <Text />
        </View>
        <Text style={styles.text}>{todo.text}</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            changeStatus("red");
          }}
        >
          <EvilIcons name={"close"} size={25} style={{ color: "red" }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeStatus("green");
          }}
        >
          <EvilIcons name={"check"} size={25} style={{ color: "green" }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeTask(todo.id);
          }}
        >
          <EvilIcons name={"trash"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodoItem;
