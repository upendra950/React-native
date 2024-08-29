import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text } from 'react-native'

export const Settings = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}> change your Settings !!</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'    
    },
    text:{
        fontSize:25
    }

  })
