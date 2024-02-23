import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";

const Bai2_Lab6 = () => {
    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={MainScreen}/>
                <Drawer.Screen name="Details" component={DetailsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
       
    );
};
export default Bai2_Lab6;