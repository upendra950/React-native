/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';


import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [mail, onChangeMail] = useState('');
  const[name,onChangeName] = useState('');
  const[mailVerify,setMailVerify]=useState(false);
  const[nameVerify,setNameVerify]=useState(false);
  
  const onChangeName1 =(name:any)=>{
    const name1=name;
    onChangeName(name);
    const checkName=/^[a-zA-Z]/;
    if( name.length <3){
     setNameVerify(true);}
     else if(checkName.test(name1) === false){
      setNameVerify(true);
     }
    else
       setNameVerify(false);

  }

const onChangeEmail = (text:any) => {
  const mailId=text;
  onChangeMail(mailId);
  const emailId=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if(emailId.test(mailId) === false){
    setMailVerify(true);
  }
  else setMailVerify(false)


}
 

  return (
    <View style={styles.container}>

      <Text style={styles.title} >Login</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your mail'
        onChangeText={e=>onChangeEmail(e)}
        value={mail}
      />
            {mailVerify ?<Text style={styles.error}>enter valid mail</Text>:null }

      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={e=>onChangeName1(e)}
        value={name}
      />
      {nameVerify ?<Text style={styles.error}>enter valid name</Text>:null }
      <Button 

      title='Login'
      onPress={()=>Alert.alert('data submityted sucessfully')}
            />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
  },
  title:{
     fontSize:30,
  },
  input: {
    height: 40,
    width:250,
    margin: 12,
    borderWidth: 1,
    borderRadius:10
  },
  btn:{
    borderRadius:10
  },
  error:{
    color:'red'

  }

});

export default App;
