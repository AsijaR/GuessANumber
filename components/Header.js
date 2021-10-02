import React from "react";
import {View,Text,StyleSheet, Platform} from 'react-native';
import colors from "../constants/colors";
//creating a component
const Header = props=>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
     width:'100%',
     height:90,
     paddingTop:36,
     backgroundColor:Platform.OS==='android'?colors.primary:'white',
     alignItems:'center',
     justifyContent:'center',
     borderBottomColor:Platform.OS==='ios'?"#ccc":'transperent',
     borderBottomWidth:Platform.OS==='ios'?1:0
    },
    headerTitle:{
        color:'white',
        fontSize:18
    }
  });
  
export default Header;