
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './redux/Counter';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import Store from './redux/Store';
import {DataList} from './redux/DataList';
import { List } from './screens/components/List';
import { BottomTab } from './screens/E-Commerce/BottomTab';
import { ListComponent } from './screens/E-Commerce/ListComponent';
import Example  from './screens/uiComponents/Calendar';



const Stack =createNativeStackNavigator();

export const AboutStack =()=>{
   return(
    <Stack.Navigator initialRouteName='BottomTab' >
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
    <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{headerShown:false}}/>
    <Stack.Screen name ='BottomTab' component={BottomTab} options={{headerShown:false}}/>
    <Stack.Screen name='Counter' component={Counter}/>
    <Stack.Screen name= 'data' component={DataList} options={{headerShown:false}}/>
    <Stack.Screen name ='list' component={List}/>
    <Stack.Screen name ='ListComponent'component={ListComponent}/>
   <Stack.Screen name ='Example' component={Example}/>
    </Stack.Navigator>
   )
}

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <AboutStack/>
    </NavigationContainer>
    
    </Provider>

  )
}

export default App




