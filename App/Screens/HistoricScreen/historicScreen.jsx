import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../HomeScreen/Header';
import api from '../../Services/api.js';
import HistoricCard from '../../Components/HistoricCard/historicCard.jsx';

function HistoricScreen() {

    const [brand, setBrand] = useState(null);
    const [kg, setKg] = useState(null);
    const [price, setPrice] = useState(null);

    const [toggleModalDelete, setToggleModalDelete] = useState(false);
    const [toggleModalEdit, setToggleModalEdit] = useState(false)

    const [clicekdId, setClicekdId] = useState(null)
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


    return (
        <View>
            <View>
                <Header />
            </View>

            <View>
                <HistoricCard
                    foods={foods}
                    getFoods={getFoods} />

                    
            </View>
        </View>
    )
}


export default HistoricScreen;
