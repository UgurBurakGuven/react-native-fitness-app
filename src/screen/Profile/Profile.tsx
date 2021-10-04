import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Profile } from "./ProfileEdit";

type detailScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

function ProfileScreen() {
  const navigation = useNavigation<detailScreenProp>();
  const [profile, setProfile] = useState<Profile>();

  useFocusEffect(
    React.useCallback(() => {
      syncProfile();
    }, [])
  );

  async function syncProfile() {
    const jsonValue = await AsyncStorage.getItem("ProfileStorage");
    const returnedValue = jsonValue ? JSON.parse(jsonValue) : [];
    setProfile(returnedValue);
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <Text style={styles.title}>
          {profile?.name ? profile?.name : "'Lütfen adınızı düzenleyin'"}
        </Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.title}>Yaşınız = </Text>
        <View style={styles.valueBox}>
          <Text style={styles.text}>{profile?.age}</Text>
        </View>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.title}>Kilonuz = </Text>
        <View style={styles.valueBox}>
          <Text style={styles.text}>{profile?.weight}</Text>
        </View>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.title}>Boyunuz = </Text>
        <View style={styles.valueBox}>
          <Text style={styles.text}>{profile?.height}</Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title={"DÜZENLE"}
          onPress={() => {
            navigation.navigate("ProfileEdit");
          }}
        />
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
  itemBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  title: { fontSize: 20, fontWeight: "bold", marginHorizontal: 5 },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
  },
  valueBox: {
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 70,
    height: 50,
    borderRadius: 10,
  },
});
export default ProfileScreen;
