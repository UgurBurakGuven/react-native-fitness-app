import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

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
            borderRadius: 5,
            marginRight: 15,
            opacity: 0.4,
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

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {},
  text: {
    maxWidth: "75%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
  icons: { flexDirection: "row" },
});

export default TodoItem;
