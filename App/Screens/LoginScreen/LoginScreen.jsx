import React from "react";
import { View, Text, StyleSheet, Alert, TextInput, Image } from "react-native";
import { Button } from 'react-native-paper';
import api from '../../Services/api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        const combinedText = email + password;

        try {
          const response =  await api.post('auth/user', {
                email: email,
                password: password
            });

            const token = response.data.token;
            await AsyncStorage.setItem('userToken', token);
            console.log(token)
            Alert.alert("Bem vindo ao Doggy!");
            navigation.navigate('TabNavigator');

        } catch (error) {
            console.log(email)
            console.log(password)
            Alert.alert('Erro!', error.message);
        }
    }

    return (
        <View style={styles.container}>

            <View>
                <Image 
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <View style={styles.inputContainer}>

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu email cadastrado."
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Digite sua senha cadastrada."
                />

            </View>

            <View style={styles.button}>
                <Button mode="contained" onPress={handleLogin}>Entrar</Button>
            </View>
        </View>
    );
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

    inputContainer: {
        padding: 20,
        backgroundColor: "#6B53AE",
        shadowColor: "#000000",
        borderRadius: 30,

    },
    label: {
        color: "#FFFFFF"
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        padding: 4,
        borderRadius: 10,
        backgroundColor: "#FFFFFF"
    },
    button: {
        paddingTop: 50,
        width: 350,
    }


});