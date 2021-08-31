import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
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
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{todo.text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          removeTask(todo.id);
        }}
      >
        <EvilIcons name={"trash"} size={25} />
      </TouchableOpacity>
    </View>
  );
}

export default TodoItem;
