import React, { useState } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import { StyleSheet } from "react-native";

function BreakFast() {
  const [breakfastVisible, setBreakfastVisible] = useState<boolean>(false);

  return (
    <View>
      <Card>
        <Card.Title
          onPress={() => {
            setBreakfastVisible(!breakfastVisible);
          }}
        >
          <Text style={styles.HeaderText}>
            {breakfastVisible ? (
              <Text>
                <AntDesign name="caretdown" size={24} color="black" />
                Kahvaltı
                <AntDesign name="caretdown" size={24} color="black" />
              </Text>
            ) : (
              <Text>
                <AntDesign name="caretup" size={24} color="black" />
                Kahvaltı
                <AntDesign name="caretup" size={24} color="black" />
              </Text>
            )}
          </Text>
        </Card.Title>
        {breakfastVisible ? (
          <View>
            <View style={styles.Items}>
              <View style={styles.Item}>
                <Text style={styles.Text}>Yumurta : </Text>
                <View style={styles.counterButton}>
                  <NumericInput rounded minValue={0} onChange={() => {}} />
                </View>
              </View>
            </View>
            <View style={styles.Items}>
              <View style={styles.Item}>
                <Text style={styles.Text}>Yulaf : </Text>
                <View style={styles.counterButton}>
                  <NumericInput rounded minValue={0} onChange={() => {}} />
                </View>
              </View>
            </View>
            <View style={styles.Items}>
              <View style={styles.Item}>
                <Text style={styles.Text}>Ekmek : </Text>
                <View style={styles.counterButton}>
                  <NumericInput rounded minValue={0} onChange={() => {}} />
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </Card>
    </View>
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

export default BreakFast;
