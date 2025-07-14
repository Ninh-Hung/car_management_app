import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useState } from "react";
import SignupScreen from "../screens/SignupScreen";
import AddVehicleScreen from "../screens/AddVehicleScreen";
import DetailVehicleScreen from "../screens/DetailVehicleScreen";
import UserSettingScreen from "../screens/UserSettingScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
            <Stack.Screen name="Vehicle Detail" component={DetailVehicleScreen} options={{ title: '' }} />
            <Stack.Screen name="AddVehicle" component={AddVehicleScreen} options={{ title: 'Add Vehicle' }} />
            <Stack.Screen name="UserSetting" component={UserSettingScreen} options={{ title: '' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}