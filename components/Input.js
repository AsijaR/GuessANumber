import React from "react";
import {View,TextInput,StyleSheet} from 'react-native';
// takes all props and spreads them to the whole textinput component (forwards them)
// {...props}
const Input = props=>{
    return (
       <TextInput {...props} style={{...styles.input, ...props.styles}}/>
    )
};

const styles = StyleSheet.create({
    input: {
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10
    }
  });
  
export default Input;