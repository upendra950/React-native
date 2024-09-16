import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Button from 'react-native-button';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IonIcon from "react-native-vector-icons/Ionicons"


export const LoginScreen = ({navigation}:any) => {
    const [mail, onChangeMail] = useState('');
    const [name, onChangeName] = useState('');
    const [mailVerify, setMailVerify] = useState(false);
    const [nameVerify, setNameVerify] = useState(false);
     

  
    const onChangeName1 = (name:string) => {
      onChangeName(name);
      const checkName = /^[a-zA-Z]/;
      const number=/[0-9]/
      if (!checkName.test(name) || name.length < 3 ) {
        setNameVerify(true);
      } 
      else if(number.test(name)){
        setNameVerify(true)
      }
      else {
        setNameVerify(false);
      }
    };
  
    const onChangeEmail = (text:string) => {
      onChangeMail(text);
      const emailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      setMailVerify(!emailId.test(text));
    };

    const navigateToHome = (name:any,mail:any) => {
      // if (name && mail) {
          // navigation.navigate('HomeScreen');
          navigation.navigate('BottomTab')
      // } else {
      //     Alert.alert('Validation Error', 'Please enter the details before going to login');
      // }
  }
  
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.card}>

          <IonIcon name="person-circle-outline" size={60} color="#333"  />
  
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mail"
            onChangeText={onChangeEmail}
            value={mail}
          />
          {mailVerify ? <Text style={styles.error}>Enter valid email</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={onChangeName1}
            value={name}
          />
          {nameVerify ? <Text style={styles.error}>Enter valid name</Text> : null}
       
          <Button
            style={styles.button}
            onPress={()=>navigateToHome(name,mail) }
          >Login
            </Button>
        </View>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#E7F0DC',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '80%',
      padding: 20,
      backgroundColor: '#F7F9F2',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      color: '#333',
    },
    input: {
      height: 50,
      width: '100%',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      paddingLeft: 20,
      backgroundColor: '#f9f9f9',
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
    button:{
      // backgroundColor:"#508D4E",
      backgroundColor:'#00A9FF',
      height:45,
      color:'white',
      display:'flex',
      width:290,
      padding:9,
      borderRadius:10,
      fontSize:20
    }
  });
  
