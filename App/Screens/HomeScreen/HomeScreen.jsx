import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import Header from './Header'
import DropDownPicker from 'react-native-dropdown-picker';
import api from '../../Services/api.js';


export default function HomeScreen() {

  const [monthSearch, setmonthSearch] = useState('');
  const [totalGasto, setTotalGasto] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [yearSearch, setYearSearch] = useState('');
  

  const [open, setOpen] = useState(false);
  const [openY, setOpenY] = useState(false);
  const months = [
    { label: 'Janeiro', value: '1' },
    { label: 'Fevereiro', value: '2' },
    { label: 'Março', value: '3' },
    { label: 'Abril', value: '4' },
    { label: 'Maio', value: '5' },
    { label: 'Junho', value: '6' },
    { label: 'Julho', value: '7' },
    { label: 'Agosto', value: '8' },
    { label: 'Setembro', value: '9' },
    { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' },
    { label: 'Dezembro', value: '12' }
  ];

  const years = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
  ];



  const handlemonthSearchChange = (event) => {
    setmonthSearch(event.target.value);
  };
  const handleYearChange = (event) => {
    setYearSearch(event.target.value);
  };


  const calculateTotalperMonth = async () => {
    try {
      const response = await api("/weight", {
        params: {
          numero: selectedMonth
        }
      });
      const total = response.data[selectedMonth] || 0;
    
      setTotalGasto(total.toFixed(2));
      
      console.log(total)
    } catch (error) {
      console.error("Erro ao calcular por mês", error);
    }
  };

  return (

    <View>
      <View>
        <Header />
      </View>

      <View style={styles.container}>
        <View>
          <Text>Selecione o mês</Text>
        </View>

        <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={selectedMonth} // Use selectedMonth as value
            items={months}
            setOpen={setOpen}
            setValue={setSelectedMonth} // Set selected month
            setItems={setSelectedMonth}
          />
        </View>

        <View>
          <Text>No ano:</Text>
        </View>

        <View style={styles.dropdown2}>
          <DropDownPicker
            open={openY}
            value={yearSearch} // Use selectedMonth as value
            items={years}
            setOpen={setOpenY}
            setValue={setYearSearch} // Set selected month
            setItems={setYearSearch}
          />
        </View>
        <View style={styles.button}>
          <Button style={{ borderRadius: 20 }} title='Enviar' onPress={(e) => calculateTotalperMonth(e)} />
        </View>

      </View>


    <View style={styles.containerResult}>
      <View style={styles.result}>
        <Text>Total gasto no mês: {selectedMonth}</Text>
        <Text>R$ {totalGasto}</Text>
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

  containerResult:{
    padding: 40,
    alignItems: "center",
    alignContent: "center",
  },

  result:{
    padding: 50,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: '#200fbab4',
    borderRadius: 10,
  }


});
