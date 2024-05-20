import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useState } from 'react';
import HistoricModalDelete from '../HistoricModalDelete/historicModalDelete.jsx';
import HistoricModalEdit from '../../Components/HistoricModalEdit/historicModalEdit.jsx';

const HistoricCard =
    ({ foods, setClickedId, deleteFood, editFood, brand, setBrand, kg, setKg, price, setPrice }) => {

        const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
        const [modalEditVisible, setModalEditVisible] = useState(false);
        const reversedFoods = [...foods].reverse();

        return (
            <View>
                {console.log(foods)}
                <Card>
                    <Card.Content style={styles.container}>

                        {reversedFoods.map((food, index) => (

                            <View style={styles.card} key={index}>
                                <Text variant="titleLarge">{food.brand}</Text>
                                <Text variant="bodyMedium">{food.kg.$numberDecimal} Kg</Text>
                                <Text variant="bodyMedium">R$ {food.price.$numberDecimal}</Text>
                                <Text variant="bodyMedium">{food.date}</Text>

                                <Card.Actions>
                                    <Button
                                        onPress={() => {
                                            setClickedId(food._id)
                                            setModalEditVisible(true)
                                        }}>Editar</Button>

                                    <Button
                                        onPress={() => {
                                            setClickedId(food._id)
                                            setModalDeleteVisible(true)
                                        }}
                                    >Deletar</Button>
                                </Card.Actions>
                            </View>
                        ))}
                    </Card.Content>
                </Card>

                <HistoricModalDelete
                    setModalDeleteVisible={setModalDeleteVisible}
                    modalDeleteVisible={modalDeleteVisible}
                    setClickedId={setClickedId}
                    deleteFood={deleteFood} />

                <HistoricModalEdit

                    brand={brand}
                    setBrand={setBrand}
                    kg={kg}
                    setKg={setKg}
                    price={price}
                    setPrice={setPrice}

                    setModalEditVisible={setModalEditVisible}
                    modalEditVisible={modalEditVisible}
                    setClickedId={setClickedId}
                    editFood={editFood} />
            </View>
        );

    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
});

export default HistoricCard;
