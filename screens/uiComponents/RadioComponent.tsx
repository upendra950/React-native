import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

export default function ReactSimpleButton() {
    const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
    const options = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
    ]; //create our options for radio group
    return (
      <View>
        <RadioForm
          radio_props={options}
          initial={0} //initial value of this group
          onPress={(value:any) => {
            setChosenOption(value);
          }} 
        />
      </View>
    ); 
  }
  const styles=StyleSheet.create({
    radio:{
        color:'black'
    }

  })