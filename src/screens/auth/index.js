import React from "react";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
const Splash = () => {
    return (
       
        <View style={styles.container}>
            <Image
             resizeMode="contain"
             style={styles.img}
             source={require('../../asstes/images/10050 1.png')}/>
            
            <Text style={styles.title}>You'll find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
        </View>
    );
};

export default Splash;