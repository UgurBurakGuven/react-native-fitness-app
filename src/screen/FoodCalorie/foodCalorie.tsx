import React, { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import MealItem from "./meal";
import { Icon } from "react-native-elements";
let helperArray = require("./food.json");
import { FoodObject } from "./meal";

function FoodCalorie() {
  const [allUsers, setAllUsers] = useState<Array<FoodObject>>(helperArray);
  const [usersFiltered, setUsersFiltered] =
    useState<Array<FoodObject>>(helperArray);

  function searchedFood(textToSearch: string) {
    setUsersFiltered(
      allUsers.filter((i) =>
        i.name.toLocaleLowerCase().includes(textToSearch.toLocaleLowerCase())
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name={"search"} size={30} />
            <TextInput
              style={{ maxWidth: "90%", width: "100%" }}
              placeholder={"Lütfen öğünü seçiniz"}
              placeholderTextColor={"white"}
              onChangeText={(text) => {
                searchedFood(text);
              }}
            />
          </View>
        </View>
      </View>

      <ScrollView>
        {usersFiltered.map((food) => (
          <MealItem key={food.id} food={food} />
        ))}
      </ScrollView>
    </View>
  );
}

export default FoodCalorie;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
    backgroundColor: "white",
  },
  scrollView: { maxHeight: "98%" },
  itemContainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  item: {
    width: "90%",
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 30,
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
});
