import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// importando telas
import TransactionScreen from '../screens/Transaction';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Transação' component={TransactionScreen}/>
          <Tab.Screen name='Pesquisa' component={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}