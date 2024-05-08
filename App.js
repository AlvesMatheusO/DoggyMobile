import { StyleSheet, Text, View } from "react-native";

import OnboardingScreen from "./App/Screens/Onboarding/OnboardingScreen";
import AuthScreen from "./App/Screens/AuthScreen/Authscreen";
import HomeScreen from "./App/Screens/HomeScreen/HomeScreen";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnboardingScreen">
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} 
          options={{headerShown: false}}/>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
    paddingTop: 20,
  },
});
