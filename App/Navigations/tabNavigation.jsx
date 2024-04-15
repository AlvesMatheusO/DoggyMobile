import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.jsx";
import AddFood from "../Screens/AddFoodScreen/AddFood.jsx";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen.jsx";
import { Entypo,FontAwesome, FontAwesome6} from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>

            <Tab.Screen name='home' component={HomeScreen}
            options={{
                tabBarLabel:({color}) => (
                    <Text style={{color:color, fontSize:12, marginTop: -7}}>Home</Text>
                ),
                tabBarIcon:({color, size}) => (
                    <Entypo name="home" size={24} color="black" />
                )
            }} />
            <Tab.Screen name='addFood' component={AddFood} 
            options={{
                tabBarLabel:({color}) => (
                    <Text style={{color:color, fontSize:12, marginTop: -7}}>Adicionar Ração</Text>
                ),
                tabBarIcon:({color, size}) => (
                    <FontAwesome6 name="bone" size={24} color="orange" />
                )
            }}/>
      
            <Tab.Screen name='profile' component={ProfileScreen}
            options={{
                tabBarLabel:({color}) => (
                    <Text style={{color: color, fontSize: 12, marginTop: -7}}>Perfil</Text>
                ),
                tabBarIcon:({color, size}) => (
                    <FontAwesome name="user-circle" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    );
}