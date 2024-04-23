import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function ModalDelete({ deleteFood, setClickedId, modalDeleteVisible, setModalDeleteVisible }) {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDeleteVisible}
        onRequestClose={() => {
          setModalDeleteVisible(!modalDeleteVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deletar Ração</Text>
            <Text>Tem certeza que deseja deletar ração?</Text>

            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalDeleteVisible(!modalDeleteVisible)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => [setModalDeleteVisible(!modalDeleteVisible), deleteFood(setClickedId)]}>
                <Text style={styles.textStyle}>Deletar</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#808080',
    marginRight: 10, // Aumentar a margem à direita para separar os botões
  },
  buttonDelete: {
    backgroundColor: '#FF0000', // Cor vermelha
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
