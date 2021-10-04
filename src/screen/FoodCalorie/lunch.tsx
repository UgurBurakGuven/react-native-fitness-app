import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";

function Lunch() {
  const [lunch, setLunch] = useState<boolean>(false);

  return (
    <View>
      <Card>
        <Card.Title
          onPress={() => {
            setLunch(!lunch);
          }}
        >
          <Text style={styles.HeaderText}>
            {lunch ? (
              <Text>
                <AntDesign name="caretdown" size={24} color="black" />
                Öğle Yemeği
                <AntDesign name="caretdown" size={24} color="black" />
              </Text>
            ) : (
              <Text>
                <AntDesign name="caretup" size={24} color="black" />
                Öğle Yemeği
                <AntDesign name="caretup" size={24} color="black" />
              </Text>
            )}
          </Text>
        </Card.Title>
        {lunch ? (
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

export default Lunch;
