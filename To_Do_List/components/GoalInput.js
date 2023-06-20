import { useState } from "react";
import { 
    TextInput,
    View,
    Button,
    StyleSheet,
    Modal,
    Image,
} from "react-native";


function GoalInput(props){

    const [enteredGoalText,setEnterdGoalText]=useState('');

    function TextInputHandler(enteredText){
        setEnterdGoalText(enteredText);
      };
    
    function AddGoalHandler(){
        props.AddGoalHandler(enteredGoalText)
    }
    function endAddGoalHandler(){
        props.endAddGoalHandler()
    }


    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.AddView}> 
                <Image source={require('../assets/Images/goal.png')} style={styles.Image}/>
                <TextInput 
                style={styles.TextInput} 
                placeholder='What is your goal' 
                onChangeText={TextInputHandler}/>
                <View style={styles.buttonConteiner}>
                    <View style={styles.Button}>
                        <Button
                        color={'#5e0acc'} 
                        title='Add Goal' 
                        onPress={AddGoalHandler}/>
                    </View>
                    <View style={styles.Button}>
                        <Button
                         color={'#f31282'} 
                        title="Cancel"
                        onPress={endAddGoalHandler}
                        />
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default GoalInput;
const styles=StyleSheet.create({
    TextInput:{
        width: '100%',
        borderColor: '#e4d0ff',
        borderWidth: 1,
        margin: 8,
        padding: 16,
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
      },
      Image:{
        width:100,
        height:100,
        margin:20,

      },
      AddView:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      buttonConteiner:{
        flexDirection: "row",
      },
      Button:{
        margin:8,
        width: '40%',
      }
})