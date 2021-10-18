import React from "react";
import { ScrollView, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type detailScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

function Home() {
  const navigation = useNavigation<detailScreenProp>();

  return (
    <ScrollView decelerationRate={"fast"} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.squareBox}>
          <View
            style={styles.shadow}
            onTouchEnd={() => navigation.navigate("ProfileScreen")}
          >
            <LinearGradient
              colors={["#ff4e50", "#f9d423"]}
              style={styles.square}
            >
              <MaterialCommunityIcons name={"notebook-outline"} size={50} />
              <Text style={styles.text}>Profil</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.squareBox}>
          <View
            onTouchEnd={() => navigation.navigate("TodoList")}
            style={styles.shadow}
          >
            <LinearGradient
              colors={["#70e1f5", "#ffd194"]}
              style={styles.square}
            >
              <MaterialCommunityIcons name={"notebook-outline"} size={50} />
              <Text style={styles.text}>Yapılacaklar Listesi</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.squareBox}>
          <View
            style={styles.shadow}
            onTouchEnd={() => navigation.navigate("StopWatch")}
          >
            <LinearGradient
              colors={["#556270", "#ff6b6b", "#ff6b6b", "#ff6b6b"]}
              style={styles.square}
            >
              <Entypo name={"stopwatch"} size={50} />
              <Text style={styles.text}>Kronometre</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.squareBox}>
          <View
            style={styles.shadow}
            onTouchEnd={() => {
              navigation.navigate("BodyIndexCalculator");
            }}
          >
            <LinearGradient
              colors={["#9d50bb", "#9d50bb", "#6e48aa"]}
              style={styles.square}
            >
              <MaterialIcons name={"calculate"} size={50} />
              <Text style={styles.text}>Vücut Kitle İndeksi</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.squareBox}>
          <View
            style={styles.shadow}
            onTouchEnd={() => navigation.navigate("CalorieCalculator")}
          >
            <LinearGradient
              colors={["#ff4e50", "#f9d423"]}
              style={styles.square}
            >
              <MaterialCommunityIcons name={"notebook-outline"} size={50} />
              <Text style={styles.text}>Kalori ihtiyacı hesaplama</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.squareBox}>
          <View
            style={styles.shadow}
            onTouchEnd={() => navigation.navigate("FoodCalorie")}
          >
            <LinearGradient
              colors={["#aa4f50", "#a9d423"]}
              style={styles.square}
            >
              <MaterialCommunityIcons name={"notebook-outline"} size={50} />
              <Text style={styles.text}>Besin Değeri Hesaplama</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.varyans2}>
          <LinearGradient
            colors={["#7df3ff", "#05e6fc"]}
            style={styles.varyans}
          ></LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "8%",
    justifyContent: "center",
    paddingBottom: "100%",
  },
  squareBox: {
    width: "40%",
    height: 150,
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  square: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  varyans2: { width: "90%", height: 200, marginVertical: "10%" },
  varyans: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
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
