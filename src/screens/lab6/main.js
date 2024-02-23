import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text,  View, TextInput } from "react-native";



const MainScreen = ({navigation}) => {
    const [enterUser,setEnterUser] = useState ();
    const switchScreen = () => navigation.navigate('Details',{
        user : enterUser,
        id : Math.random () * 100,
    });
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Chào bạn, đây là màn hình chính</Text>
            <TextInput style={styles.textinput} placeholder="Mời bạn nhập vào" onChangeText={setEnterUser}></TextInput>
            <TouchableOpacity 
            onPress={switchScreen}
            style={styles.TouchableOpacity} title="Đi tới màn hình chi tiết">
                <Text style={styles.textButton}>Đi tới màn hình chi tiết</Text>
            </TouchableOpacity>
        </View>
    );
};
export default MainScreen;

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