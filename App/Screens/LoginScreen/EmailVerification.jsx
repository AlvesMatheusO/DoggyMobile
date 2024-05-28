import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    Image
} from "react-native";
import { Button } from 'react-native-paper';
import api from "../../Services/api";

const RecoverPassword = () => {
    const [email, setEmail] = useState('');

    const handleRecovery = async () => {
        if (!email) {
            Alert.alert("Erro!", "Por favor insira seu email.");
            return;
        }
    
        try {
            const response = await api.post('/auth/user/recovery', { email });
            Alert.alert("Sucesso", "Email de verificação enviado com sucesso. Verifique sua caixa de entrada.");
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao enviar código de verificação. Tente novamente mais tarde.");
            console.error(error);
        }
    };
    
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Digite seu email."
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Button
                onPress={handleRecovery}
                textColor="#FFF"
                buttonColor="#6B53AE"
                style={styles.button}
            >
                Recuperar email
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    logo: {
        marginTop: 40,
        height: 260,
        width: 230,
        marginBottom: 50,
        alignSelf: "center"
    },
    input: {
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 30
    },
    button: {
        borderRadius: 30,
        padding: 8,
        marginTop: 16
    }
});

export default RecoverPassword;
