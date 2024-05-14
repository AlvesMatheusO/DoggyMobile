import React, { Component } from 'react';
import api from '../../Services/api.js';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import {
    LineChart
} from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

export default class ChartHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthlyExpenses: [0,0,0,0,0,0,0,0,0,0,0,0]
        };
    }

    async componentDidMount() {
        await this.getMonthlyExpenses();
    }

    async getMonthlyExpenses() {
        try {
            const expenses = await this.fetchMonthlyExpenses();
            const monthlyExpenses = Object.values(expenses);
            this.setState({ monthlyExpenses });
        } catch (error) {
            console.error(error);
        }
    }

    fetchMonthlyExpenses = async () => {
        try {
            const response = await api("/weight");
            
            return response.data;
        } catch (error) {
            console.log(error)
            return {};
        }
    }

    render() {
        const { monthlyExpenses } = this.state;
        console.log(monthlyExpenses)

        return (
            <View>
                <LineChart
                    data={{
                        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                        datasets: [
                            {
                            data: monthlyExpenses
                            }
                        ]
                    }}
                    width={380}
                    height={250}
                    yAxisLabel="R$"
                    yAxisInterval={1}
                    chartConfig={{
                        backgroundColor: "#B0C4DE",
                        backgroundGradientFrom: "#520CA8",
                        backgroundGradientTo: "#B0C4DE",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "3",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 10,
                        borderRadius: 16
                    }}
                />
            </View>
        )
    }
}