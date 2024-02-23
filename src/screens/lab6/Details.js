import { TouchableOpacity, StyleSheet, Text,  View, TextInput } from "react-native";
import { CommonActions } from "@react-navigation/native";

const DetailsScreen = ({navigation,route}) => {
    const resetNavi = () => navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes:[
                {name : 'Main',}
            ]
        })
    )
    console.log(route);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Chào bạn, {route.params.user}</Text>
            <Text style={styles.text}>Mã số của bạn là , {route.params.id}</Text>
            <TouchableOpacity 
            onPress={navigation.goBack}
            style={styles.TouchableOpacity} >
                <Text style={styles.textButton}>Trở lại bằng GO BACK -</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={resetNavi}
            style={styles.TouchableOpacity} >
                <Text style={styles.textButton}>Trở lại bằng RESET -</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.pop()}
            style={styles.TouchableOpacity} >
                <Text style={styles.textButton}>Trở lại bằng POP -</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.popToTop()}
            style={styles.TouchableOpacity} >
                <Text style={styles.textButton}>Trở lại bằng - POPTOPOP -</Text>
            </TouchableOpacity>
        </View>
    );
};
export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        height: '100%',
        justifyContent: 'center',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'blue',

    },
    textinput:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginVertical: 20,
    },
    TouchableOpacity:{
        borderRadius:10,
        backgroundColor: 'blue',
        width: "100%",
        height: 50,
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
        color:'white',
        
    },
});