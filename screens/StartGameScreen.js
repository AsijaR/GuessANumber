import React,{useState} from "react";
import {View,Text,StyleSheet, Button,TouchableWithoutFeedback, Keyboard, Alert,Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";




const StartGameScreen = props=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();
    const [buttonWidth,setButtonWidth]=useState(Dimensions.get('window').width/4);

    const numberInputHandler =inputText=>{
        // bilo sta sta nije broj biva zamenjeno sa empty string
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    //dimanamicki racunamo width kad okrecemo ekran
    useEffect(() => {
        const updateLayout=()=>{
            setButtonWidth(Dimensions.get('window').width/4);
        }
        Dimensions.addEventListener('change',updateLayout);
        return () => {
            Dimensions.removeEventListener('change',updateLayout);
        }
    });

    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredValue);
        if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99){
            Alert.alert('Invalid number','Number has to be between 1 and 99',
                        [{text:'Ok',style:'destructive',onPress:resetInputHandler}]);
            return;
        }
        setConfirmed(true); 
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };
    
    let confirmedOutput;

    if(confirmed){
        confirmedOutput=(
            <Card style={styles.summaryContainer}>
              <Text>You selected</Text>
              <NumberContainer>{selectedNumber}</NumberContainer>
              <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            </Card>
          );
    };
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                <View style={{width:buttonWidth}}> 
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
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
        width:Dimensions.get('window').width / 4
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
      }
  });
  
export default StartGameScreen;