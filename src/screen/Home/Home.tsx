import React from "react";
import { FlatList, Text, View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type detailScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

function Home() {
  const control: number = 0;
  const navigation = useNavigation<detailScreenProp>();
  return (
    <View style={styles.container}>
      <View
        onTouchStart={() => navigation.navigate("TodoList")}
        style={styles.shadow}
      >
        <LinearGradient colors={["#70e1f5", "#ffd194"]} style={styles.square}>
          <MaterialCommunityIcons name={"notebook-outline"} size={50} />
          <Text style={styles.text}>Todo List</Text>
        </LinearGradient>
      </View>
      <View
        style={styles.shadow}
        onTouchStart={() => navigation.navigate("StopWatch")}
      >
        <LinearGradient
          colors={["#556270", "#ff6b6b", "#ff6b6b", "#ff6b6b"]}
          style={styles.square}
        >
          <Entypo name={"stopwatch"} size={50} />
          <Text style={styles.text}>Stop Watch</Text>
        </LinearGradient>
      </View>
      <View style={styles.shadow}>
        <LinearGradient
          colors={["#9d50bb", "#9d50bb", "#6e48aa"]}
          style={styles.square}
        >
          <MaterialCommunityIcons name={"notebook-outline"} size={50} />
          <Text style={styles.text}>Todo List</Text>
        </LinearGradient>
      </View>
      <View style={styles.shadow}>
        <LinearGradient colors={["#ff4e50", "#f9d423"]} style={styles.square}>
          <MaterialCommunityIcons name={"notebook-outline"} size={50} />
          <Text style={styles.text}>Todo List</Text>
        </LinearGradient>
      </View>

      <LinearGradient
        colors={["#7df3ff", "#05e6fc"]}
        style={styles.varyans}
      ></LinearGradient>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 30,
    justifyContent: "center",
  },
  square: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  varyans: {
    width: 400,
    height: 150,
    backgroundColor: "red",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

export default Home;
