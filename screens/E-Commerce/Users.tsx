import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Button from 'react-native-button'
import Bloodgroup from '../uiComponents/BloodgroupDrop'
import Calendar from '../uiComponents/Calendar'
import RadioComponent from '../uiComponents/RadioComponent'
import CheckBoxComponent from '../uiComponents/CheckBoxComponent'


export const Users = ({ navigation }: any) => {
  let dateNow = new Date();
  const formattedDate = dateNow.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const [date, setDate] = useState(formattedDate);
  const [showPicker, setShowPicker] = useState(false);
  const [open, setOpen] =useState(false);
  useEffect(()=>{
  })
  const dateOfBirth = () => {
    setShowPicker(!showPicker)
    console.log('CLICKED')
    setOpen(!open)
    
  }
  const handleChange =(propDate:any)=>{
       setDate(propDate)
       setOpen(!open)
       setShowPicker(!showPicker)
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../Vision.jpg')} resizeMode='stretch' style={styles.img}>
        <View style={styles.viewContainer}><View style={styles.card}>
          <View style={styles.inputbtn}>
            <Text style={styles.textName}>First name & Last name</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter your name'
            // value={}
            />
            <View>
              <Text style={styles.textName}>Gender</Text>

              <View style={styles.radio}><RadioComponent/></View>

            </View>
            <View>
              <Text style={styles.textName}>Blood Group</Text>
              <Bloodgroup />
            </View>
            <View>
              <Text style={styles.textName}>
                Date of Birth
              </Text>
              <Calendar/>
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
         <CheckBoxComponent ></CheckBoxComponent> 
          <View >
             
            <Button
              style={styles.button}
              onPress={() => Alert.alert('Profile created')}
            >Create Profile
            </Button>
          </View>
        </View></View>
      </ImageBackground>
       
    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
  radio:{
   display:'flex',
   justifyContent:'center',
   paddingLeft:10
  },
  calendar:{
    width:'70%',
    height:'20%',
    flex:0.1,
    position:'absolute',
  },
  viewContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: '100%',
    // marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingLeft: 20,
    backgroundColor: '#f9f9f9',

  },
  inputDate: {
    height: 50,
    width: '100%',
    // marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingLeft: 20,
    backgroundColor: '#f9f9f9',
    fontSize:18,
    paddingTop:10

  },
  input1: {
    height: 50,
    width: '90%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 20,
    // backgroundColor: '#F7F9F2',
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,


  },
  textName: {
    fontSize: 18,
    color: '#333',
    margin: 10,
    fontWeight: 'bold'
  },
  inputSame: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    // backgroundColor:"#508D4E",
    backgroundColor: '#00A9FF',
    height: 45,
    color: 'white',
    display: 'flex',
    width: 330,
    padding: 9,
    borderRadius: 10,
    fontSize: 20
  },
  icon: {
    position: 'relative',
    fontSize: 18,
    marginLeft: -30,
    marginTop: 15
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  datePicker: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  conts:{
    backgroundColor:'gray'
  }
})
