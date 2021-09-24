import React from "react";
import {View,Text,StyleSheet} from 'react-native';
// we are getting all card styles and merging it with new ones styles in props.styles
// {{...styles.card,...props.style}}

const Card = props=>{
    return (
        <View style={{...styles.card,...props.style}}>
           {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        // only works on Android
        elevation: 5,
        backgroundColor:'white',
        padding:20,
        borderRadius:10
    }
  });
  
export default Card;