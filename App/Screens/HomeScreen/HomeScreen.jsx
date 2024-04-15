import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import Header from './Header'
import DropDownPicker from 'react-native-dropdown-picker';


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
      const response = await fetch("/weight", {
        params: {
          numero: monthSearch
        }
      });
      const total = response.data[monthSearch] || 0;
      setTotalGasto(total);
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
          <Text>
            Selecione o mês
          </Text>
        </View>

        <View>
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
          <Text>
            No ano:
          </Text>
        </View>
        <View>
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
          <Button style={{ borderRadius: 20 }} title='Enviar' onPress={(e) => handlePost(e)} />
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
})
