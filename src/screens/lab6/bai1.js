import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";
import Bai2_Lab6 from "./bai2Drawer";

const Bai1_Lab6 = () => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bai2" component={Bai2_Lab6}/>
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Bai1_Lab6;