import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons'; 
import Foundation from 'react-native-vector-icons/Foundation';
import { Products } from './Products';
import { Categories } from './Categories';
import { Users } from './Users';
import { Cart } from './Cart';
import { ListComponent } from './ListComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutStack } from '../../App';
import { Nested } from './Nested';

const Tab = createBottomTabNavigator();
const Screen = createNativeStackNavigator();



export const BottomTab = ({navigation}:any) => {
  return (
   

    <Tab.Navigator  screenOptions=
    { {
      tabBarActiveTintColor:'#0163d2',
      tabBarInactiveTintColor:'black',
      tabBarLabelStyle:{
        fontSize:14,
        paddingBottom:5,
        fontWeight:600
      }
    }}
    >
        
       <Tab.Screen name="Products" component={Nested} options={{
      headerShown:false,
      tabBarIcon:()=><Foundation name="list" size={28}/>
      }}/>
       <Tab.Screen name="Categories" component={Categories} options={{
      headerShown:false,
      tabBarIcon:()=><IconMat name='category' size= {22} />
    }} />
      
    <Tab.Screen name="Users" component={Users} options={{
      headerShown:false,
      tabBarIcon:()=><Icon1 name='account' size= {28}/>
      }} />
   
    <Tab.Screen name="Cart" component={Cart} options={{
      headerShown:false,
      tabBarIcon:()=><Icon name='shopping-cart' size= {20}/>
      }} />
    </Tab.Navigator> 
  )
}
