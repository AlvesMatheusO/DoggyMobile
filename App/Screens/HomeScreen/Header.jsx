import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header({ navigation }) {

    const handleLogout = async () => {
        await AsyncStorage.removeItem('authToken');
        navigation.navigate('LoginScreen');
    }
    return (
        <View
            style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo.png')}
                    style={styles.logo} />
            </View>

            <TouchableOpacity style={styles.logoutIcon} >

                <AntDesign name="logout" size={27} color="white" />

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        padding: 8,
        flexDirection: "row",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#520CA8'
    },
    logoContainer: {
        paddingLeft: 30

    },

    logo: {
        width: 45,
        height: 50
    },

    logoutIcon: {
        paddingTop: 7,
        paddingLeft: 280
    },
})

