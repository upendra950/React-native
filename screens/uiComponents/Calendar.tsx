import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AntDesign from "react-native-vector-icons/AntDesign";

 const Calendar = () => {
 
  let dateNow =new Date();
  const formattedDate = dateNow.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date,setDate] = useState('')

  const showDatePicker = (date:any) => {
    setDatePickerVisibility(true);
   let format = new Date(date).toLocaleDateString();
    setDate(format);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    let formatted = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setDate(formatted)
    hideDatePicker();
  };

  return (
    <View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <Pressable onPress={showDatePicker}><View style={styles.container}>
      <Text style={styles.inputDate} >{date}</Text>
      <AntDesign name='calendar' style={styles.icon}></AntDesign>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /></Pressable>
    </View>
  );
};
const styles=StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
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
  icon: {
    position: 'relative',
    fontSize: 18,
    marginLeft: -30,
    marginTop: 15
  },
})
 export default Calendar;

