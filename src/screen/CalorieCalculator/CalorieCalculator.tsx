import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import NumericInput from "react-native-numeric-input";
import calculateCalorie from "./calculateCalorie";

function CalorieCalculator() {
  const [maleGender, setMaleGender] = useState<boolean>(true);
  const [femaleGender, setFemaleGender] = useState<boolean>(false);
  const [selectedPicker, setSelectedPicker] = useState<string>("2");
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [returnedCalorie, setReturnedCalorie] = useState<number | string>("");

  return (
    <ScrollView decelerationRate={"fast"} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.inContainer}>
          <View style={styles.gender}>
            <Text style={styles.genderText}>Cinsiyet: </Text>
            <View style={styles.genderMale}>
              <Text style={styles.genderText}>Erkek</Text>
              <CheckBox
                checked={maleGender}
                onPress={() => {
                  setMaleGender(!maleGender);
                  setFemaleGender(!femaleGender);
                }}
              />
            </View>
            <View style={styles.genderFemale}>
              <Text style={styles.genderText}>Kadın</Text>
              <CheckBox
                checked={femaleGender}
                onPress={() => {
                  setFemaleGender(!femaleGender);
                  setMaleGender(!maleGender);
                }}
              />
            </View>
          </View>
          <View style={styles.picker}>
            <View style={styles.pickerTextView}>
              <Text style={styles.pickerText}>Aktivite Sıklığı :</Text>
            </View>
            <Picker
              selectedValue={selectedPicker}
              mode={"dropdown"}
              onValueChange={(itemValue) => setSelectedPicker(itemValue)}
              style={{ width: 370, height: 20 }}
            >
              <Picker.Item label="fazla hareket etmiyorum" value="0" />
              <Picker.Item label="hafif egzersizler yapıyorum" value="1" />
              <Picker.Item
                label="orta derece harekette iş yapıyorum"
                value="2"
              />
              <Picker.Item label="haftada 5 gün spor yapıyorum" value="3" />
              <Picker.Item label="spor müsabakasına hazırlanıyorum" value="4" />
            </Picker>
          </View>
        </View>
        <View style={styles.ageItems}>
          <Text style={styles.ageItemText}>Yaş: </Text>
          <View style={styles.ageNumericInput}>
            <NumericInput
              minValue={0}
              onChange={(value) => {
                setAge(value);
              }}
            />
          </View>
        </View>
        <View style={styles.sizeItems}>
          <Text style={styles.sizeItemText}>Boy: </Text>
          <View style={styles.heightNumericInput}>
            <NumericInput
              minValue={0}
              onChange={(value) => {
                setHeight(value);
              }}
            />
          </View>
        </View>
        <View style={styles.sizeItems}>
          <Text style={styles.sizeItemText}>Kilo: </Text>
          <View style={styles.heightNumericInput}>
            <NumericInput
              minValue={0}
              onChange={(value) => {
                setWeight(value);
              }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title={"Hesapla"}
            color={"black"}
            onPress={() => {
              setReturnedCalorie(
                calculateCalorie(
                  maleGender,
                  femaleGender,
                  selectedPicker,
                  age,
                  height,
                  weight
                )
              );
              setModalVisible(true);
            }}
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
              <Text style={styles.modalText}>{returnedCalorie}</Text>
              <Pressable
                style={[styles.button2, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>CLOSE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inContainer: { paddingBottom: "20%" },
  gender: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  genderMale: {
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  genderFemale: {
    marginHorizontal: "1%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  genderText: {
    fontSize: 20,
  },
  picker: {
    justifyContent: "center",
    alignItems: "center",
  },
  pickerTextView: {
    marginTop: "5%",
  },
  pickerText: { fontSize: 20 },

  ageItems: {
    marginTop: "24%",
    marginVertical: "2%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: "25%",
  },
  ageItemText: { fontSize: 20 },
  ageNumericInput: {
    marginLeft: "20%",
  },
  heightNumericInput: { marginLeft: "20%" },
  sizeItems: {
    marginVertical: "2%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: "25%",
  },
  sizeItemText: { fontSize: 20 },
  button: {
    width: 200,
    borderWidth: 1,
  },
  buttonBox: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
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
export default CalorieCalculator;
