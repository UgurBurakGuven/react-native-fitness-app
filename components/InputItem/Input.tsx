import React from "react";

import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

type InputItemProps = {
  changeText: (val: string) => void;
  pressButton: () => void;
} & TouchableOpacityProps;

function Input({ changeText, pressButton, ...otherProps }: InputItemProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"merhaba"}
        onChangeText={changeText}
      />
      <TouchableOpacity onPress={pressButton} {...otherProps}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Input;
