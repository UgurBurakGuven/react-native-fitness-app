import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/screen/RootStackParams";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoList from "./src/screen/TodoList/TodoList";
import Home from "./src/screen/Home/Home";
import StopWatch from "./src/screen/StopWatch/StopWatch";
import BodyIndexCalculator from "./src/screen/BodyIndex/BodyIndexCalculator";
import CalorieCalculator from "./src/screen/CalorieCalculator/CalorieCalculator";
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Ana Menü" }}
          component={Home}
        />
        <Stack.Screen
          name="TodoList"
          options={{ title: "Yapılacaklar Listesi" }}
          component={TodoList}
        />
        <Stack.Screen
          name="BodyIndexCalculator"
          options={{ title: "Vücut kitle indeksi" }}
          component={BodyIndexCalculator}
        />
        <Stack.Screen
          name="CalorieCalculator"
          options={{ title: "Kalori ihtiyacı " }}
          component={CalorieCalculator}
        />
        <Stack.Screen name="StopWatch" component={StopWatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
