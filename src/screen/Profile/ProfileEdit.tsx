import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import NumericInput from "react-native-numeric-input";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Profile = {
  name: string;
  age: number;
  weight: number;
  height: number;
};
function ProfileEdit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  async function storeData(value: Profile) {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("ProfileStorage", jsonValue);
  }

  async function saveProfile() {
    const newProfile = { age, weight, height, name };
    await storeData(newProfile);
  }

  return (
    <View style={styles.container}>
      <View style={styles.Items}>
        <Text style={styles.Text}>İsminiz = </Text>
        <TextInput
          placeholder={"Lütfen isminizi giriniz"}
          onChangeText={(value) => {
            setName(value);
          }}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: 200,
            height: 50,
            maxWidth: 200,
            maxHeight: 50,
          }}
          value={name}
        ></TextInput>
      </View>
      <View style={styles.Items}>
        <Text style={styles.Text}>Yaşınız = </Text>
        <NumericInput
          value={0}
          totalWidth={200}
          minValue={0}
          totalHeight={50}
          valueType="real"
          rounded
          textColor="#B0228C"
          onChange={(value) => {
            setAge(value);
          }}
        />
      </View>
      <View style={styles.Items}>
        <Text style={styles.Text}>Boyunuz = </Text>
        <NumericInput
          value={0}
          totalWidth={200}
          minValue={0}
          totalHeight={50}
          valueType="real"
          rounded
          textColor="#B0228C"
          onChange={(value) => {
            setHeight(value);
          }}
        />
      </View>
      <View style={styles.Items}>
        <Text style={styles.Text}>Kilonuz = </Text>
        <NumericInput
          value={0}
          totalWidth={200}
          minValue={0}
          totalHeight={50}
          valueType="real"
          rounded
          textColor="#B0228C"
          onChange={(value) => {
            setWeight(value);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button title={"submit"} onPress={saveProfile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Items: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {},
});

export default ProfileEdit;
