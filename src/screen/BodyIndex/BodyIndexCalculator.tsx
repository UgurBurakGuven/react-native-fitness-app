import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import calculateBodyIndex from "./calculateBKI";
import NumericInput from "react-native-numeric-input";

function BodyIndexCalculator() {
  const [weightState, setWeightState] = useState<number>(0);
  const [heightState, setHeightState] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [returnedBKI, setReturnedBKI] = useState<string | number>("");

  function changeWeightState(weight: number) {
    setWeightState(weight);
  }

  function changeHeightState(height: number) {
    setHeightState(height);
  }

  return (
    <ScrollView decelerationRate={"fast"} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.weight}>
          <View>
            <Text style={styles.label}>Kilo (kg)</Text>
          </View>
          <NumericInput
            minValue={0}
            inputStyle={{ width: 160 }}
            containerStyle={{ width: 250 }}
            onChange={changeWeightState}
          />
        </View>
        <View style={styles.tall}>
          <View>
            <Text style={styles.label}>Boy (cm)</Text>
          </View>
          <NumericInput
            inputStyle={{ width: 160 }}
            containerStyle={{ width: 250 }}
            minValue={0}
            onChange={changeHeightState}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{returnedBKI}</Text>
              <Pressable
                style={[styles.button2, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>CLOSE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.button}>
          <Button
            title={"Hesapla"}
            color={"black"}
            onPress={() => {
              setModalVisible(true);
              setReturnedBKI(calculateBodyIndex(weightState!, heightState!));
            }}
          />
        </View>
        <View style={styles.bmiList}>
          <Text style={styles.listTitle}>Yaşınız için en uygun BKI</Text>
          <Text style={styles.listText}>19-24 Yaş için: 19-24 BKI</Text>
          <Text style={styles.listText}>25-34 Yaş için: 20-25 BKI</Text>
          <Text style={styles.listText}>35-44 Yaş için: 21-26 BKI</Text>
          <Text style={styles.listText}>45-54 Yaş için: 22-27 BKI</Text>
          <Text style={styles.listText}>55-64 Yaş için: 23-28 BKI</Text>
          <Text style={styles.listText}>65 Yaş ve sonrası için 24-29 BKI</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  weight: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
  label: { fontSize: 20, marginBottom: "5%" },
  weightInput: {
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  tall: { marginTop: "5%", justifyContent: "center", alignItems: "center" },
  button: {
    marginTop: "7%",
    borderRadius: 1,
    borderWidth: 2,
  },
  bmiList: {
    marginTop: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  listText: { fontSize: 16, margin: 4 },
  listTitle: { fontSize: 20, margin: 4, marginBottom: 10 },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    width: 100,
    height: 50,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
  },
});
export default BodyIndexCalculator;
