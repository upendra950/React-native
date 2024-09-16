import React, { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from 'react-native-button'
import DropdownComponent from '../uiComponents/Dropdown'
import Bloodgroup from '../uiComponents/BloodgroupDrop'
import DatePicker from 'react-native-modern-datepicker'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import CalendarPicker from 'react-native-calendar-picker'

export const Profile = ({ navigation }: any) => {

  const [isDate,setIsDate] = useState(false);

  const dateOfBirth =()=>{
  // setIsDate(true);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      

     
      {/* <Text style={styles.text}>  Welcome to  profile</Text>
    <Button  onPress={()=>{navigation.navigate('LoginScreen')}}>Log out</Button> */}
       <View>
        {/* <DatePicker style={styles.datePicker}/> */}
        {/* <CalendarPicker/> */}
       </View>
      <View style={styles.card}>
        <View style={styles.inputbtn}>
          <Text style={styles.textName}>First name & Last name</Text>
          <TextInput
            style={styles.input}
          // value={}
          />
          <View>
            <Text style={styles.textName}>Gender</Text>

            <DropdownComponent />

          </View>
          <View>
            <Text style ={styles.textName}>Blood Group</Text>
          <Bloodgroup/>
        </View>
        <View>
          <Text style={styles.textName}>
            Date of Birth
          </Text>
          <View style={styles.container}>
           <TextInput style={styles.input} />
           <AntDesign name='calendar' style={styles.icon} onPress={dateOfBirth}></AntDesign>
           </View>
        </View>
        </View>

        <View style={styles.inputSame}>
          <View style={styles.inputbtn1}>
            <Text style={styles.textName}>
              Height (cm)
            </Text>
            <TextInput style={styles.input1} ></TextInput>
          </View>
          <View style={styles.inputbtn1}>
            <Text style={styles.textName}>
              Weight (kg)
            </Text>
            <TextInput style={styles.input1} ></TextInput>
          </View>
        </View>
        <View >
        <Button
            style={styles.button}
            onPress={()=>Alert.alert('Profile created')}
          >Create Profile
            </Button>
        </View>
      </View>
      
    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25
  },
  input: {
    height: 50,
    width: '100%',
    // marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingLeft: 20,
    backgroundColor: '#f9f9f9',
  },
  input1: {
    height: 50,
    width: '90%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,

    backgroundColor: '#f9f9f9',
  },
  inputbtn: {
    width: '100%',
  },
  inputbtn1: {
    width: '50%',
    marginTop: 10

  },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: '#F7F9F2',
    borderRadius: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  textName: {
    fontSize: 18,
    color: '#333',
    margin: 10
  },
  inputSame: {
    display: 'flex',
    flexDirection: 'row',
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
  },
  icon:{
    position:'relative',
    fontSize:18,
    marginLeft:-30,
    marginTop:15
  },
  container:{
    display:'flex',
    flexDirection:'row'
  },
  datePicker: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
})
