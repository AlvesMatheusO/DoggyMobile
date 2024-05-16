import { View, Text, TextInput, StyleSheet, Alert, Button , Pressable, Platform } from 'react-native';
import React, { useState } from 'react';
import api from '../../Services/api.js';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HistoricScreen from '../HistoricScreen/historicScreen.jsx';

const AddFood = () => {
  const [brand, setBrand] = useState('');
  const [kg, setKG] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);
  const [foods, setFoods] = useState([]);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate || date;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const handlePost = async () => {
    const combinedText = brand + kg + price;

    if (containsAndroidEmoji(combinedText)) {
      Alert.alert("Erro!", "Não é possível inserir ração com emojis do Android");
      return;
    }

    if (containsEmoji(combinedText)) {
      Alert.alert("Erro!", "Não é possível inserir ração com emojis");
      return;
    }

    try {
      if (parseFloat(kg) < 0) {
        throw new Error('Não é permitido inserir números negativos para o peso.');
      }

      if (brand.length > 30) {
        throw new Error('Não é permitido inserir mais que 30 caracteres na marca.');
      }

      if (!/^\d*\.?\d*$/.test(kg)) {
        throw new Error('Apenas números são permitidos no campo de peso.');
      }

      if (!/^\d*\.?\d*$/.test(price)) {
        throw new Error('Apenas números são permitidos no campo de preço.');
      }

      const formattedDate = formatDate(date);
      const userID = await AsyncStorage.getItem('userToken'); // Use the correct key for userID
      const token = await AsyncStorage.getItem('userToken');

      if (!userID || !token) {
        throw new Error('User not authenticated.');
      }

      const response = await api.post('/food', {
        brand: brand,
        date: formattedDate,
        kg: parseFloat(kg),
        price: parseFloat(price),
        userID: userID // Ensure you send userID in the payload
      });

      console.log('Response status:', response.status);
      console.log('Response data:', response.data);

      if (response.status == 201) {
        Alert.alert('Inserir Ração', 'Ração inserida com sucesso!', [{ text: 'Sair' }]);

        try {
          const response = await api.get('/food');
          const data = response.data;
          setFoods(data);
          console.log("conectou");

        } catch (error) {
          console.log(error);
          alert("Não foi possivel carregador suas inserções, tente recarregar a página.");
        }
      } else {
        throw new Error('Erro ao inserir ração.');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Server error response:', error.response.data);
        Alert.alert('Erro!', `Erro do servidor: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
        Alert.alert('Erro!', 'Nenhuma resposta do servidor.');
      } else {
        // Something else caused the error
        console.error('Error:', error.message);
        Alert.alert('Erro!', error.message);
      }
    }
  };



  const containsEmoji = (text) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]/u;

    for (let i = 0; i < text.length; i++) {
      if (emojiRegex.test(text[i])) {
        return true;
      }
    }

    return false;
  };

  const containsAndroidEmoji = (text) => {
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

    const isAndroidEmoji = (char) => {
      return androidEmojiRanges.some(([start, end]) => {
        return char >= start && char <= end;
      });
    };

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (isAndroidEmoji(charCode)) {
        return true;
      }
    }

    return false;
  };

  return (
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

        <View style={styles.form}>
          <Text style={styles.label}>Data</Text>
          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>

              <TextInput
                style={styles.input}
                placeholder=' Insira a data de compra'
                value={formatDate(date)}
                placeholderTextColor="#FFF"
                editable={false}
              />
            </Pressable>
          )}
        </View>

        {showPicker && (
          <DateTimePicker
            mode='date'
            display='spinner'
            value={date}
            onChange={onChange}
          />
        )}

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
        <Button
          title="Adicionar Ração"
          onPress={handlePost}
          color="#200fbab4"
        />

      </View>
    </View>
  );
};

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
  },
  btnStyle: {
    padding: 4,
    backgroundColor: '#200fbab4',
    borderRadius: 10
  }

});

export default AddFood;