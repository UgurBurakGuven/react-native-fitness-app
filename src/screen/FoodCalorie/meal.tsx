import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import NumericInput from "react-native-numeric-input";

export interface FoodObject {
  id: number;
  subtitle: string;
  name: string;
  foodCalorie: number;
  weight: string;
}

type FoodObjectProps = {
  food: FoodObject;
};

function MealItem({ food }: FoodObjectProps) {
  const [calorie, setCalorie] = useState<number>(0);
  function calorieTotal(value: number, FoodCalorie: number) {
    setCalorie(value * FoodCalorie);
  }

  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{food.name}</ListItem.Title>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <ListItem.Subtitle>
            {food.weight} -{">"} {food.foodCalorie} kalori
          </ListItem.Subtitle>
          <ListItem.Subtitle>total:{calorie}</ListItem.Subtitle>
          <View>
            <NumericInput
              rounded
              minValue={0}
              onChange={(value) => {
                calorieTotal(value, food.foodCalorie);
              }}
            />
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  Items: { padding: 10 },
  Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  Text: { fontSize: 20 },
  counterButton: {},
  Header: {},
  HeaderText: { fontSize: 20 },
});

export default MealItem;
