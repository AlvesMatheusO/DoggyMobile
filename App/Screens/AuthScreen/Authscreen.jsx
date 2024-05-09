import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import TabNavigation from "../../Navigations/tabNavigation.jsx";
import api from '../../Services/api.js';

function AuthScreen({ navigation }) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');


  const handleRegister = async () => {

    const combinedText = name + email + password + confirmPassword;

    try {
      await api.post('/auth/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      Alert.alert("Usuário criado com Sucesso!");
      navigation.navigate('TabNavigator');

    } catch (error) {
      Alert.alert('Erro!', error.message);
    }
  }



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
          placeholder=' Digite sua senha'
        />

        <Text style={styles.label}>Repitir Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder=' Repita sua senha'
        />
      </View>
      <View style={styles.button}>
        <Button mode="contained" onPress={handleRegister}>Cadastrar</Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    backgroundColor: '#6B52AE',
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
    width: 350
  }
});

export default AuthScreen;
