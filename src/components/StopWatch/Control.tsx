import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  setTimeInSeconds: Function;
};

function Control(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlayButton = () => {
    clearInterval(intervalId);
    const interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 10);

    setIntervalId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title={"Start"} onPress={handlePlayButton} color={"black"}>
          Start
        </Button>
      </View>
      <View style={styles.button}>
        <Button title={"Stop"} onPress={handleStopButton} color={"black"}>
          Stop
        </Button>
      </View>
      <View style={styles.button}>
        <Button title={"Restart"} onPress={handleReset} color={"black"}>
          Restart
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default Control;
