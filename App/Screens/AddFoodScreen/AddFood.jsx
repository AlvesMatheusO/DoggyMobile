import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import React, { useState } from 'react'
import api from '../../Services/api.js'

export default AddFood = () => {

  const [brand, setBrand] = useState('');
  const [kg, setKG] = useState('');
  const [price, setPrice] = useState('');

  const handlePost = async () => {
    const combinedText = brand + kg + price;

    if (containsAndroidEmoji(combinedText)) {
      Alert.alert("Erro!", "Não é possível inserir ração com emojis do Android")
    } else if (containsEmoji(combinedText)) {
      Alert.alert("Erro!", "Não é possível inserir ração com emojis")
    } else {
      try {
        if (parseFloat(kg) < 0) {
          throw new Error('Não é permitido inserir números negativos para o peso.');
        } else if (brand.length > 30) {
          throw new Error('Não é permitido inserir mais que 30 caracteres na marca.');
        } else if (!/^\d*\.?\d*$/.test(kg)) {
          throw new Error('Apenas números são permitidos no campo de peso.');
        } else if (!/^\d*\.?\d*$/.test(price)) {
          throw new Error('Apenas números são permitidos no campo de preço.');
        }

        await api.post('/food', {
          brand: brand,
          kg: kg,
          price: price
        });
        Alert.alert('Inserir Ração', 'Ração inserida com sucesso!', [
          {
            text: 'Sair'
          }
        ]);
      } catch (error) {
        Alert.alert('Erro!', error.message);
      }
    }
  }

  const containsEmoji = (text) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]/u;

    for (let i = 0; i < text.length; i++) {
      if (emojiRegex.test(text[i])) {
        return true;
      }
    }

    return false;
  }

  const containsAndroidEmoji = (text) => {
    // Lista de intervalos de código Unicode para emojis do Android
    const androidEmojiRanges = [
      [0x1F300, 0x1F3F0], // Miscellaneous Symbols and Pictographs
      [0x1F400, 0x1F640], // Emoticons
      [0x1F650, 0x1F680], // Ornamental Dingbats
      [0x1F910, 0x1F96C], // Emojis and People
      [0x1F980, 0x1F9E0], // Animals and Nature
      [0x1FA70, 0x1FA74], // Persons with Heart
      [0x1FA78, 0x1FA7A], // Persons in Fantasy Situations
      [0x1FA80, 0x1FA86], // Transport and Map Symbols
      [0x1FA90, 0x1FAA8], // Flags
    ];

    // Função para verificar se um código Unicode está dentro dos intervalos de emojis do Android
    const isAndroidEmoji = (char) => {
      return androidEmojiRanges.some(([start, end]) => {
        return char >= start && char <= end;
      });
    };

    // Verifica cada caractere do texto
    for (let i = 0; i < text.length; i++) {
      // Obtém o código Unicode do caractere
      const charCode = text.charCodeAt(i);
      // Verifica se o caractere é um emoji do Android
      if (isAndroidEmoji(charCode)) {
        return true;
      }
    }

    return false;
  };

  return (
    <View>
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
          />
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            value={kg}
            onChangeText={(text) => setKG(text)}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Preço</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(text) => setPrice(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.button}>
          <Button mode="contained" style={{ borderRadius: 20 }} onPress={handlePost}>Enviar</Button>
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
