import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import calculateTimer from "../../Helper/calculateTimer";
import Control from "../../components/StopWatch/Control";

function StopWatch() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  useEffect(() => {
    const timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeFirst}>{timerArray![0]} </Text>
        <Text style={styles.timeColon}>:</Text>
        <Text style={styles.time}>{timerArray![1]}</Text>
        <Text style={styles.timeColon}>:</Text>
        <Text style={styles.time}>{timerArray![2]}</Text>
        <Text style={styles.timeColon}>:</Text>
        <Text style={styles.time}>{timerArray![3]}</Text>
      </View>
      <Control setTimeInSeconds={setTimeInSeconds} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
  },
  time: {
    marginHorizontal: 2,
    fontSize: 50,
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    width: 70,
  },
  timeFirst: {
    marginHorizontal: 2,
    fontSize: 50,
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
  timeColon: {
    marginHorizontal: 2,
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default StopWatch;
