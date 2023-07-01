import { 
    StyleSheet, 
    View, 
    Text,
    Pressable, 
} from "react-native";

const GoalItem = (props) =>{
    return(
        <View style={styles.goalView}>
            <Pressable android_ripple={{color: '#5ezzzz'}} style={({pressed})=> pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goal}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalView:{
        margin:8,
        borderRadius:5,
        backgroundColor:'#5e1aaa',
        borderWidth: 1,
        borderColor: 'black',
        alignContent: 'center',
      },
      goal:{
        color:'white',
        padding: 8,
      },  
    pressedItem: {
        backgroundColor: '#5ezzzz',
    }  
});