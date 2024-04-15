import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.jsx";
import AddFood from "../Screens/AddFoodScreen/AddFood.jsx";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen.jsx";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='addFood' component={AddFood} />
            <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
}