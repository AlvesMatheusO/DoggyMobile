import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../HomeScreen/Header';
import api from '../../Services/api.js';
import HistoricCard from '../../Components/HistoricCard/historicCard.jsx';
import ModalDelete from '../../Components/HistoricModalDelete/historicModalDelete.jsx';

function HistoricScreen() {

    const [brand, setBrand] = useState(null);
    const [kg, setKg] = useState(null);
    const [price, setPrice] = useState(null);


    const [clicekdId, setClickedId] = useState(null)
    const id = clicekdId;

    const [foods, setFoods] = useState([]);

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

    return (
        <View>
            <View>
                <Header />
            </View>

            <View>
                <HistoricCard
                    foods={foods}
                    getFoods={getFoods} 
                    setClickedId={setClickedId}
                    deleteFood={deleteFood}/>
            </View>
        </View>
    )
}

export default HistoricScreen;
