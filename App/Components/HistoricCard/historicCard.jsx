import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView } from 'react-native';

const HistoricCard = ({ foods }) => {

    return (
        // <View style={styles.container}>
        //     <Text style={styles.title}>Histórico de Rações</Text>
        //     {foods.map((food, index) => (
        //         <View key={index} style={styles.card}>
        //             <Text style={styles.cardTitle}>{food.brand}</Text>
        //             <Text>{food.kg.$numberDecimal} Kg</Text>
        //             <Text>R$ {food.price.$numberDecimal}</Text>
        //             <Text>{food.date}</Text>
        //             <Text style={styles.link}>Editar</Text>
        //             <Text style={styles.link}>Deletar</Text>
        //         </View>
        //     ))}
        // </View>

        <ScrollView>
            {console.log(foods)}
            <Card>
                <Card.Content>

                    {foods.map((food, index) => (
                        
                        <View key={index}>
                            <Text variant="titleLarge">{food.brand}</Text>
                            <Text variant="bodyMedium">{food.kg.$numberDecimal} Kg</Text>
                            <Text variant="bodyMedium">R$ {food.price.$numberDecimal}</Text>
                            <Text variant="bodyMedium">{food.date}</Text>

                            <Card.Actions>
                                <Button>Editar</Button>
                                <Button>Deletar</Button>
                            </Card.Actions>
                        </View>
                    ))}

                </Card.Content>

            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
