import { useState } from "react";
import { 
    TextInput,
    View,
    Button,
    StyleSheet,
    Modal,
    Image,
} from "react-native";


const GoalInput = (props) => {

    const [enteredGoalText,setEnterdGoalText]=useState('');

    const textInputHandler = (enteredText) => {
        setEnterdGoalText(enteredText);
      };
    
    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoalText)
    }
    const endAddGoalHandler = () => {
        props.endAddGoalHandler()
    }
    const image = '../assets/Images/goal.png'


    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.AddView}> 
                <Image source={require(image)} style={styles.Image}/>
                <TextInput 
                style={styles.TextInput} 
                placeholder='What is your goal' 
                onChangeText={textInputHandler}/>
                <View style={styles.buttonConteiner}>
                    <View style={styles.Button}>
                        <Button
                        color={'#5e0acc'} 
                        title='Add Goal' 
                        onPress={addGoalHandler}/>
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