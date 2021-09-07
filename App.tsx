import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/screen/RootStackParams";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoList from "./src/screen/TodoList/TodoList";
import Home from "./src/screen/Home/Home";
import StopWatch from "./src/screen/StopWatch/StopWatch";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="StopWatch" component={StopWatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
