import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { Increment , Decrement} from './CounterAction'



const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state:any)=>state.counter)
    
  return (
   <SafeAreaView style = {styles.container}>
    <View>
        <Text style = {styles.counter}>
            Counter Application
        </Text>
    </View>
    <View style ={styles.viewContainer}>
    <View>
        <TouchableOpacity >
        <Text style = {styles.buttonRight} onPress={() =>dispatch(Increment())}>
            Increment
        </Text>
        </TouchableOpacity>
    </View>
    <Text style = {styles.counter}>{counterValue}</Text>
    <View>
        <TouchableOpacity>
        <Text style = {styles.buttonLeft} onPress={() =>{ dispatch(Decrement())}}>
          Decrement
        </Text>
        </TouchableOpacity>
    </View>
  
    </View>
   </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    viewContainer:{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center'
    },
    buttonLeft:{
        fontSize:20,
        color:'black',
        backgroundColor:'#C40C0C',
        padding:10,
    },
    buttonRight:{
        fontSize:20,
        color:'black',
        backgroundColor:'green',
        padding:10
    },
    counter:{
        fontSize:30,
        color:"black",
        margin:20
    }

 })

export default Counter