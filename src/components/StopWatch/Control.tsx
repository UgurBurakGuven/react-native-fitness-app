import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  setTimeInSeconds: Function;
};

function Control(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  useEffect(() => {
    return () => clearInterval(intervalId!);
  }, [intervalId]);

  function handlePlayButton() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const interval: NodeJS.Timer = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 10);

    setIntervalId(interval);
  }

  function handlePause() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  function handleStop() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setTimeInSeconds(0);
  }

  function handleRestart() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setTimeInSeconds(0);
    handlePlayButton();
  }
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title={"Start"} onPress={handlePlayButton} color={"black"}>
          Start
        </Button>
      </View>
      <View style={styles.button}>
        <Button title={"Pause"} onPress={handlePause} color={"black"}>
          Stop
        </Button>
      </View>
      <View style={styles.button}>
        <Button title={"Stop"} onPress={handleStop} color={"black"}>
          Restart
        </Button>
      </View>
      <View style={styles.button}>
        <Button title={"Restart"} onPress={handleRestart} color={"black"}>
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
