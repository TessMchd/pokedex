import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../Components/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PokemonPage from "../Components/PokemonPage";
import Parameters from "../Components/Parameters";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="DetailsScreen" component={PokemonPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={PokemonStack} options={{tabBarIcon : ({}) => {
                        return <Icon name='home' size={30} color='#fa9696' />
                    }}}/>
                <Tab.Screen name='Search' component={Parameters} options={{tabBarIcon : ({}) => {
                        return <Icon name='magnify' size={30} color='#fa9696' />
                    }}}/>
                <Tab.Screen name='Settings' component={Parameters} options={{tabBarIcon : ({}) => {
                        return <Icon name='nut' size={30} color='#fa9696' />
                    }}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
