import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/screen/RootStackParams";
import TodoList from "./src/screen/TodoList/TodoList";
import Home from "./src/screen/Home/Home";
import StopWatch from "./src/screen/StopWatch/StopWatch";
import BodyIndexCalculator from "./src/screen/BodyIndex/BodyIndexCalculator";
import CalorieCalculator from "./src/screen/CalorieCalculator/CalorieCalculator";
import Profile from "./src/screen/Profile/Profile";
import ProfileEdit from "./src/screen/Profile/ProfileEdit";
import FoodCalorie from "./src/screen/FoodCalorie/foodCalorie";

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
        <Stack.Screen
          name="StopWatch"
          options={{ title: "Kronometre" }}
          component={StopWatch}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{ title: "ProfilScreen" }}
          component={Profile}
        />
        <Stack.Screen
          name="ProfileEdit"
          options={{ title: "ProfilEdit" }}
          component={ProfileEdit}
        />
        <Stack.Screen
          name="FoodCalorie"
          options={{ title: "ProfilEdit" }}
          component={FoodCalorie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
