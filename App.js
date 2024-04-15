import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/tabNavigation';
import HomeScreen from './App/Screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
   
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});
