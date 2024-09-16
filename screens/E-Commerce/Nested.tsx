import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Products } from './Products';
import { ListComponent } from './ListComponent';

 const Stack =createNativeStackNavigator();
export const Nested = () => {
  return (
    <Stack.Navigator initialRouteName='Products'>
        <Stack.Screen name ="Products" component={Products} options={{headerShown:false}}/>
        <Stack.Screen name ="ListComponent" component={ListComponent} options={{
          title:''
        }}/>
    </Stack.Navigator>
  )
}
