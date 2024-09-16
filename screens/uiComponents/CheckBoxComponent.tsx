import React, { useState } from "react";
import { CheckBox } from '@rneui/themed';
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/base";
// import styles from "react-day-picker/style.css";

const CheckBoxComponent=()=> {
    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = useState(false);
   

    const toggleCheckbox = () => {setChecked(!checked) };
    const toggleValue = () =>{ setValue(!value)};

    return (
        <View >
       <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="blue"
          title='I accept Terms Of Service & Price Policy' 
          containerStyle={styles.container}
          textStyle={styles.text}
        />  
    
         <CheckBox
        
          checked={value}
          onPress={toggleValue}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon={'checkbox-blank-outline'}
          checkedColor="blue"
          title='I would like to receive Product updates via email'
          containerStyle={styles.container}
          textStyle={styles.text}
                />
         {/* <CheckBox
          checked={false}
          disabled
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
        />  */}
        </View> 
    
    );
  }
  export default CheckBoxComponent;
  const styles= StyleSheet.create({
    
    container:{
        backgroundColor:'#d3d3d3',
        marginVertical:0
    },
    text:{
        fontSize:15
    }
  })