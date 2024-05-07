import { StyleSheet, Text, View } from "react-native";

import Auth from "./App/Screens/AuthScreen/Authscreen.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth />
      
      
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
