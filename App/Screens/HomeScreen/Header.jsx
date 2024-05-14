import React from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Header() {
    return (

            <View
                style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/logo.png')}
                        style={styles.logo} />
                </View>

                <View style={styles.logoutIcon}>
                <AntDesign name="logout" size={27} color="white" />
                </View>
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

