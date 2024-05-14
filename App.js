import { StyleSheet, Text, View, StatusBar } from "react-native";

import OnboardingScreen from "./App/Screens/Onboarding/OnboardingScreen";
import AuthScreen from "./App/Screens/AuthScreen/Authscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./App/Navigations/tabNavigation";
import LoginScreen from "./App/Screens/LoginScreen/LoginScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#520CA8" translucent={false} />
      <NavigationContainer>

        <Stack.Navigator initialRouteName="OnboardingScreen">
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen 
          name="AuthScreen" 
          component={AuthScreen} 
          options={{headerTitle: "Cria sua conta"}}
          />

          <Stack.Screen
            name="TabNavigator"
            component={TabNavigation}
            options={{ headerShown: false }}
          />

          <Stack.Screen 
            name="LoginScreen"
            options={{headerTitle: "Logue na sua conta"}}
            
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
