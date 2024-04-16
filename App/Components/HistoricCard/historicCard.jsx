import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';

const HistoricCard = ({ foods, toggleModalDelete, setClickedId, setToggleModalDelete }) => {

    const [modalVisible, setModalVisible] = useState(false);



    return (
        <View>
        <SafeAreaView>
            <ScrollView>
                {console.log(foods)}
                <Card>
                    <Card.Content style={styles.container}>

                        {foods.map((food, index) => (

                            <View style={styles.card} key={index}>
                                <Text variant="titleLarge">{food.brand}</Text>
                                <Text variant="bodyMedium">{food.kg.$numberDecimal} Kg</Text>
                                <Text variant="bodyMedium">R$ {food.price.$numberDecimal}</Text>
                                <Text variant="bodyMedium">{food.date}</Text>

                                <Card.Actions>
                                    <Button>Editar</Button>

                                    <Button onPress={() => {
                                        setClickedId(food._id)
                                        setToggleModalDelete();
                                        modalVisible()
                                        console.log("pressed")
                                        
                                    }}
                                    >Deletar</Button>
                                </Card.Actions>
                            </View>
                        ))}

                    </Card.Content>

                </Card>
            </ScrollView>
        </SafeAreaView>
                        
        
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