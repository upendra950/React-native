import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}> this is the home component </Text>
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
