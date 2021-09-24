import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius:150,
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
