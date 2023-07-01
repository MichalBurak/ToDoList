import { useState } from 'react';
import { 
  StyleSheet, 
  View,
  FlatList,
  Button,
 } from 'react-native';
 import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [listGoal,setListGoal]=useState([]);
  const [modalIsVisible, setModalIsVisible]=useState(false);

  const addGoalHandler = (enteredGoalText) =>{
    setListGoal(currentListGoal=>[
      ...currentListGoal,
      {text: enteredGoalText, id: Math.random().toString()},
    ])
    setModalIsVisible(false)
  };

  const deleteGoalHandler = (id) => {
    setListGoal(currentListGoal=>{
      return currentListGoal.filter((goal)=>goal.id !== id)
    })
  };

  const modalVisibilityHandler = () =>{
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <View style={styles.appConteiner}>
      <StatusBar style='light'/>
      <Button title='Add Goal' color={'#5e0ecc'} onPress={modalVisibilityHandler}/>
      <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible} endAddGoalHandler={endAddGoalHandler}/>
      
      <View style={styles.listConteiner}>
        <FlatList
        data={listGoal}
        renderItem={(itemData)=>{
          return <GoalItem 
          text={itemData.item.text}
          onDeleteItem={deleteGoalHandler}
          id={itemData.item.id}
          />;
        }}
        keyExtractor={(item, index)=>{
          return item.id;
        }}  
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  appConteiner:{
    paddingTop:50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  listConteiner:{
    flex:5,
    marginTop:24,
    borderTopWidth: 2,
    borderTopColor: '#aaaaaa',
    pading: 16,
  },
});
