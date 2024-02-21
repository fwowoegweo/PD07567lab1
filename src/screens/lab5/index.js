import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../auth/styles";

const Lab5 = ()=>{
    return(
        <View style= {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
            <ImageBackground
            source={require('../../asstes/images/travel.png')}
            style={styles.img}>
            <View style={styles.details}>
                <Text style={styles.Text}>

                <Text style={styles.firstline}>Discover {'/n'}</Text>
                <Text style={styles.secondline}>world with us</Text>
                </Text>
                <Text style={styles.TextStyle}> Discover world with us</Text>
                <TouchableOpacity style={styles.buttom}>
                    <Text style={styles.buttomText}> Get stated</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}
export default Lab5;