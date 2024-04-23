import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';

export default function ModalEdit({ editFood, setClickedId, modalEditVisible, setModalEditVisible, brand, setBrand, kg, setKg, price, setPrice }) {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditVisible}
                onRequestClose={() => {
                    setModalEditVisible(!modalEditVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Editar Ração</Text>
                        <Text>Tem certeza que deseja editar a ração?</Text>

                        <View style={styles.form}>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Marca</Text>
                                <TextInput
                                    style={[styles.input, styles.inputWithBorder]}
                                    value={brand}
                                    onChangeText={(text) => setBrand(text)}
                                    required />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Peso (kg)</Text>
                                <TextInput
                                    style={[styles.input, styles.inputWithBorder]}
                                    value={kg}
                                    onChangeText={(text) => setKg(text)}
                                    keyboardType="numeric"
                                    required />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Preço</Text>
                                <TextInput
                                    style={[styles.input, styles.inputWithBorder]}
                                    value={price}
                                    onChangeText={(text) => setPrice(text)}
                                    keyboardType="numeric"
                                    required />
                            </View>
                        </View>

                        <View style={styles.buttonRow}>
                            <Pressable
                                style={[styles.button, styles.buttonSecondary]}
                                onPress={() => setModalEditVisible(!modalEditVisible)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonPrimary]}
                                onPress={() => [setModalEditVisible(!modalEditVisible), editFood(setClickedId)]}>
                                <Text style={styles.textStyle}>Editar</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    form: {
        width: '100%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: 150,
        padding: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
    },
    inputWithBorder: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    buttonRow: {
        flexDirection: "row",
        marginTop: 20,
    },
    button: {
        flex: 1,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 5,
        elevation: 2,
    },
    buttonPrimary: {
        backgroundColor: '#2196F3',
    },
    buttonSecondary: {
        backgroundColor: '#CCCCCC',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
