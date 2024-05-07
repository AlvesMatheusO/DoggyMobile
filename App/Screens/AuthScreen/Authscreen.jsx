import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from "../../Navigations/tabNavigation.jsx";

function AuthScreen() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.inputContainer}>

        <View>
          <Text style={styles.title}>
            Cadastre sua conta
          </Text>
        </View>


        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder=' Digite seu nome'
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder=' Digite seu email'
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Digite sua senha'
        />

        <Text style={styles.label}>Repitir Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder='Repita sua senha'
        />
      </View>
      <View style={styles.button}>
        <Button mode="contained">Cadastrar</Button>
      </View>
      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      <StatusBar style="dark-content" /> */}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#black",
    paddingTop: 100,
    alignItems: "center",
    padding: 10
  },

  logo: {
    height: 150,
    width: 130
  },
  title: {
    fontSize: 25,
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 50,
    color: '#FFFFFF'
  },

  label: {
    color: '#FFFFFF'
  },

  inputContainer: {
    padding: 20,
    backgroundColor: '#200fbab4',
    shadowColor: "#0000",
    borderRadius: 30
  },

  input: {
    height: 40,
    width: 350,
    margin: 12,
    padding: 4,
    borderRadius: 10,
    backgroundColor: '#fff'
  },

  button: {
    paddingTop: 50,
    width: 350,
    backgroundColor: "FFFFFF"
  }
});

export default AuthScreen;
