import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';
import {ScreenOrientation} from 'expo';
const GameOverScreen = props => {
  return (
    <ScrollView>
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image fadeDuration={1000} source={require('../assets/success.png')} resizeMode="cover" style={styles.image}/>
        {/* <Image source={{uri:"https://i.insider.com/5d55708b4afbf9403063cbd5?width=700"}} resizeMode="cover" style={styles.image}/> */}
      </View>
      
      <Text>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></Text>
      <Text>Number was: {props.userNumber}</Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    width:Dimensions.get('window').width*0.7,
    height:Dimensions.get('window').width*0.7,
    borderRadius:Dimensions.get('window').width*0.7/0.5,
    borderWidth:3,
    // sve sto je preko ovog bordera je sakriveno
    overflow:'hidden'
  },
  image:{
    width:'100%',
    height:'100%'
  },
  highlight:{
    color:colors.primary
  }
});

export default GameOverScreen;
