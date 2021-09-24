import React,{useState} from "react";
import {View,Text,StyleSheet, Button,TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";




const StartGameScreen = props=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();
   
    const numberInputHandler =inputText=>{
        // bilo sta sta nije broj biva zamenjeno sa empty string
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredValue);
        if(chosenNumber ===NaN||chosenNumber<=0||chosenNumber>99){return;}
        setConfirmed(true); 
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
       
    };
    let confirmedOutput;
    if(confirmed){
        confirmedOutput=<Text>Chosen Number {selectedNumber}</Text>
    };
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} >
            <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input  style={styles.input} 
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}/>
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        alignItems: 'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    }
  });
  
export default StartGameScreen;