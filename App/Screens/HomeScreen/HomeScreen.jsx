import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Chart from '../../Components/HomeChart/Chart.jsx';
import DropDownPicker from 'react-native-dropdown-picker';
import api from '../../Services/api.js';

export default function HomeScreen() {

  const [totalGasto, setTotalGasto] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [yearSearch, setYearSearch] = useState('');

  const [open, setOpen] = useState(false);
  const [openY, setOpenY] = useState(false);

  const months = [
    { label: 'Janeiro', value: '0' },
    { label: 'Fevereiro', value: '1' },
    { label: 'Março', value: '2' },
    { label: 'Abril', value: '3' },
    { label: 'Maio', value: '4' },
    { label: 'Junho', value: '5' },
    { label: 'Julho', value: '6' },
    { label: 'Agosto', value: '7' },
    { label: 'Setembro', value: '8' },
    { label: 'Outubro', value: '9' },
    { label: 'Novembro', value: '10' },
    { label: 'Dezembro', value: '11' }
  ];

  const years = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
  ];

  const calculateTotalperMonth = async () => {

    try {
      const response = await api.get("/weight", {
        params: {
          numero: selectedMonth
        }
      });

      const total = response.data[selectedMonth] || 0;
      setTotalGasto(total.toFixed(2));

    } catch (error) {

      Alert.alert("Ocorreu um erro ao calcular. ", error);
    }
  };

  return (

    <View>
      <View style={styles.container}>
        <View>
          <Text>Selecione o mês</Text>
        </View>
        <View>
          <DropDownPicker
            style={styles.dropdownContainer}
            open={open}
            value={selectedMonth}
            items={months}
            setOpen={setOpen}
            setValue={setSelectedMonth}
            setItems={() => {}} 
            placeholder='Selecione o Mês'
          />
        </View>
        <View>
          <Text>No ano:</Text>
        </View>
        <View style={styles.dropdown2}>
          <DropDownPicker
            open={openY}
            value={yearSearch}
            items={years}
            setOpen={setOpenY}
            setValue={setYearSearch}
            setItems={() => {}} 
            placeholder='Selecione o Ano'
          />
        </View>
        <View style={styles.button}>
          <Button mode="contained" onPress={calculateTotalperMonth}>Enviar</Button>
        </View>
      </View>

      <View style={styles.containerResult}>
        <View style={styles.result}>
          <Text style={{color: "#FFF", fontWeight: "bold"}}>Total gasto no mês: {selectedMonth !== null ? months[selectedMonth].label : ''}</Text>
          <Text style={{color: "#FFF", fontWeight: "bold"}}>R$ {totalGasto}</Text>
        </View>
        <View>
          <Chart />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  button: {
    padding: 30
  },
  dropdownContainer: {
    zIndex: 2,
    elevation: 1
  },
  dropdown2: {
    zIndex: 1
  },
  containerResult: {
    padding: 40,
    alignItems: "center",
    alignContent: "center",
    bottom: 80,
  },
  result: {
    padding: 50,
    width: 380,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: '#200fbab4',
    borderRadius: 10,
  }
});
