import { padding } from "@mui/system";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';


import AuthScreen from "../AuthScreen/Authscreen";

export default function OnboardingScreen({ navigation }) {

    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    const checkIfLoggedIn = async () => {
        const token = await AsyncStorage.getItem('userToken');

        if (token) {
            navigation.navigate('TabNavigator');
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/onboardingBackground.jpg')}
                style={styles.imageBackground}>

                <View style={styles.containerIMG}>
                    <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: "bold", color: "#FFFFFF", shadowRadius: 9 }}>
                        Bem vindo ao Doggy!
                    </Text>

                    <View style={styles.buttonBox}>
                        <Button style={styles.button} mode="contained"
                            onPress={() => navigation.navigate('AuthScreen')}>
                            Criar Conta
                        </Button>

                        <Button style={{ marginTop: 15 }} mode="contained"
                        onPress={() => navigation.navigate('LoginScreen')}>
                            Entrar
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },

    imageBackground: {
        flex: 1
    },

    containerIMG: {
        padding: 40
    },
    buttonBox: {
        flexDirection: "column",
        paddingTop: 600,
        display: "flex",
        justifyContent: "space-between"

    },

    button: {
        shadowRadius: 9,
        shadowOffset: { width: 0, height: 2 },
        shadowColor:" #000",
        shadowOpacity: 0.25,
        elevation: 5,
    }

});