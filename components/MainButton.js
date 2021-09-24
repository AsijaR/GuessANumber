import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";

const MainButton = props=>{
    return (
        // prosledjujemo klik
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
      
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor:colors.accent,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttonText:{
        color:'white'
    }
  });
  
export default MainButton;