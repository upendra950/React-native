
import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';


const Stack =createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen' >
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
    <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App


