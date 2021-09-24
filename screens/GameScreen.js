import React,{useState,useEffect,useRef} from "react";
import {View,Text,StyleSheet,Alert, Button, ScrollView, FlatList} from 'react-native';
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import {Ionicons} from '@expo/vector-icons'
import MainButton from "../components/MainButton";
const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randomNumber=Math.floor(Math.random()*(max-min))+min;
    if(randomNumber===exclude){
        return generateRandomBetween(min,max,exclude)
    }
    else{
        return randomNumber;
    }
};

// const renderListItem = (value, numOfRound) => (
//   <View key={value} style={styles.listItem}>
//     <Text >#{numOfRound}</Text>
//     <Text >{value}</Text>
//   </View>
// );

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);
const GameScreen = props=>{
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
    // const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
          onGameOver(pastGuesses.length);
        }
      }, 
    //   dependeny properties
      [currentGuess, userChoice, onGameOver]);
    const nextGuessHandler = direction => {
        if (
          (direction === 'lower' && currentGuess < props.userChoice) ||
          (direction === 'greater' && currentGuess > props.userChoice)
        ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' }
          ]);
          return;
        }
        if (direction === 'lower') {
          currentHigh.current = currentGuess;
        } else {
          currentLow.current = currentGuess+1;
        }
        const nextNumber = generateRandomBetween(
          currentLow.current,
          currentHigh.current,
          currentGuess
        );
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        // setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
        setPastGuesses(curPastGuesses => [nextNumber.toString(),...curPastGuesses]);
      };
    return (
        <View style={styles.screen}>
           <Text>Opponents Guess</Text>
           <NumberContainer>{currentGuess}</NumberContainer>
           <Card style={styles.buttonContainer}>
               <MainButton title="Lower" onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name='md-remove' size={24} color='white'/></MainButton>
               <MainButton title="Greater" onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={24} color='white'/></MainButton>
           </Card>
           <View style={styles.listContainer}>
              {/* <ScrollView contentContainerStyle={styles.list}>
                          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
              </ScrollView> */}
              {/* if we dont know how many items list is going to have we use FlatList */}
              <FlatList keyExtractor={item => item}
                        data={pastGuesses}
                        renderItem={renderListItem.bind(this, pastGuesses.length)}
                        contentContainerStyle={styles.list}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '90%'
      },
      listContainer: {
        flex: 1,
        // width: '80%'
        width: '60%'
      },
      list: {
        flexGrow: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end'
      },
      listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '60%'
        width: '100%'
      }
  });
  
export default GameScreen;