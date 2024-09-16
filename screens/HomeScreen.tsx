import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { List } from './components/List';
import { Settings } from './components/Settings';
import { Profile } from './components/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons'; 
import { Home } from './components/Home';

const Tab = createBottomTabNavigator();



export const HomeScreen = ({navigation}:any) => {
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
       <Tab.Screen name="Home" component={Home} options={{
      headerShown:false,
      tabBarIcon:()=><Icon1 name="home" size={28}/>
      }}/>
       <Tab.Screen name="List" component={List} options={{
      headerShown:false,
      tabBarIcon:()=><Icon name='list' size= {22} />
    }} />
      
    <Tab.Screen name="Profile" component={Profile} options={{
      headerShown:false,
      tabBarIcon:()=><Icon1 name='account' size= {28}/>
      }} />
   
    <Tab.Screen name="Settings" component={Settings} options={{
      headerShown:false,
      tabBarIcon:()=><IconMat name='settings' size= {24}/>
      }} />
   
    </Tab.Navigator>

  )
}
