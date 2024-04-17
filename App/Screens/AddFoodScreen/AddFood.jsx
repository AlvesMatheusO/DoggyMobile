import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import React, { useState } from 'react'
import Header from '../HomeScreen/Header'
import api from '../../Services/api.js'

export default AddFood = () => {

  const [brand, setBrand] = useState();
  const [kg, setKG] = useState();
  const [price, setPrice] = useState();

  const handlePost = async (e) => {
    e.preventDefault();

    const combinedText = brand + kg + price;

    if (containsEmoji(combinedText)) {
      Alert.alert("Erro!", "Não é possivel inserir ração com emoji")
    } else {

      try {
  
        await api.post('/food', {
          brand: brand,
          kg: kg,
          price: price
        });
        Alert.alert('Inserir Ração', 'Ração Inserida com sucesso!', [
          {
            text: 'sair'
          }
        ]);
  
      } catch (error) {
        console.log(error)
        console.log(brand, kg, price)
      }
    }
  }

  const containsEmoji = (text) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]/u;

    for(let i = 0; i < text.lenght; i++) {
      if (emojiRegex.test(text[i])) {
        return true;
      }
    }

    return false;
  }
  return (
    <View>
      <Header />

      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 25 }}>Adicionar ração</Text>
        </View>

        <View style={styles.form}>

          <Text style={styles.label}>Marca</Text>
          <TextInput
            style={styles.input}
            value={brand}
            onChangeText={(text) => setBrand(text)} 
            required/>

          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            value={kg}
            onChangeText={(text) => setKG(text)} 
            required/>

          <Text style={styles.label}>Preço</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(text) => setPrice(text)} 
            required/>
        </View>

        <View style={styles.button}>
          <Button mode="contained" style={{ borderRadius: 20 }} title='Enviar' onPress={(e) => handlePost(e)}>Enviar</Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 40
  },

  title: {
    padding: 20
  },
  label: {
    fontSize: 18
  },
  form: {
    justifyContent: "space-between"
  },

  button: {
    padding: 30

  },

  input: {
    padding: 4,
    backgroundColor: '#200fbab4',
    borderRadius: 10
  }
})