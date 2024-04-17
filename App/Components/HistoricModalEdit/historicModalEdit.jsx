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
                        <Text>Tem certeza que deseja editar ração?</Text>

                        <View style={styles.form}>

                            <Text style={styles.label}>Marca</Text>
                            <TextInput
                                style={styles.input}
                                value={brand}
                                onChangeText={(text) => setBrand(text)}
                                required />

                            <Text style={styles.label}>Peso</Text>
                            <TextInput
                                style={styles.input}
                                value={kg}
                                onChangeText={(text) => setKg(text)}
                                required />

                            <Text style={styles.label}>Preço</Text>
                            <TextInput
                                style={styles.input}
                                value={price}
                                onChangeText={(text) => setPrice(text)}
                                required />
                        </View>


                        <View style={styles.buttonRow}>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalEditVisible(!modalEditVisible)}>
                                {/* <Text style={styles.textStyle}>Fechar</Text> */}
                                <Text style={styles.textStyle}>Fechar</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => [setModalEditVisible(!modalEditVisible), editFood(setClickedId)]}>
                                {/* <Text style={styles.textStyle}>Fechar</Text> */}
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
        marginTop: 22,
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

    buttonRow: {
        flexDirection: "row",
        top: 20,

    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})