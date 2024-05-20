import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../HomeScreen/Header';
import api from '../../Services/api.js';
import HistoricCard from '../../Components/HistoricCard/historicCard.jsx';
import { ScrollView, SafeAreaView, StyleSheet, RefreshControl} from 'react-native';



function HistoricScreen() {

    const [brand, setBrand] = useState(null);
    const [kg, setKg] = useState(null);
    const [price, setPrice] = useState(null);


    const [clicekdId, setClickedId] = useState(null)
    const id = clicekdId;

    const [foods, setFoods] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefreshing = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            getFoods()
          setRefreshing(false);
        }, 2000);
      }, []);

    const getFoods = async () => {

        try {
            const response = await api.get('/food');
            const data = response.data;
            setFoods(data);
            console.log("conectou");

        } catch (error) {
            console.log(error);
            alert("Não foi possivel carregador suas inserções, tente recarregar a página.");
        }
    };

    useEffect(() => {
        getFoods();
    }, []);


    const deleteFood = async () => {

        try {
            await api.delete(`/food/${id}`)
                .then(() => alert('Ração deletada com sucesso'));
            getFoods();
        } catch (error) {
            alert("Não foi possivel apagar sua ração. ", error)
        }
    }

    const editFood = async () => {

        try {
            await api.put(`/food/${id}`, {
                brand: brand,
                kg: kg,
                price: price
            }).then(alert("Ração Editada com sucesso"));
            getFoods();
        } catch (error) {
            alert("erro ao editar ração ", error);
        }
    }

    return (
        <View>
            <ScrollView style={styles.container} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
            }>
                <HistoricCard
                    foods={foods}
                    getFoods={getFoods}
                    setClickedId={setClickedId}
                    deleteFood={deleteFood}
                    editFood={editFood}

                    brand={brand}
                    setBrand={setBrand}
                    kg={kg}
                    setKg={setKg}
                    price={price}
                    setPrice={setPrice} />
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 5
    }
})

export default HistoricScreen;
