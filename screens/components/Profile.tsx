import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from 'react-native-button'

export const Profile = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
    
    <Text style={styles.text}>  Welcome to  profile</Text>
    <Button  onPress={()=>{navigation.navigate('LoginScreen')}}>Log out</Button>
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
