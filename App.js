import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from './App/Screens/HomeScreen/Header'
import OnboardingScreen from "./App/Screens/Onboarding/OnboardingScreen";
import AuthScreen from "./App/Screens/AuthScreen/Authscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./App/Navigations/tabNavigation";
import LoginScreen from "./App/Screens/LoginScreen/LoginScreen";
import EmailVerification from "./App/Screens/LoginScreen/EmailVerification";

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
            options={{ headerTitle: "Cria sua conta" }}
          />

          <Stack.Screen
            name="TabNavigator"
            component={TabNavigation}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />,
              headerShown: true
            })}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerTitle: "Logue na sua conta" }}
          />

          <Stack.Screen 
            name="EmailVerification"
            component={EmailVerification}
            options={{ headerTitle: "Verificação de Email" }}
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
