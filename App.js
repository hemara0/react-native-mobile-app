import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AccountScreen from './screens/AccountScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Surface, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-reanimated';
const App = () => {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused,size,color}) => {
            let iconName;
            if(route.name === "Home"){
              iconName = focused?  "home" : "home-outline";
              size = focused ? size + 8 : size + 5;
            }else if(route.name === "Search"){
              iconName = focused?  "search" : "search-outline";
              size = focused ? size + 8 : size + 5;
            }else if(route.name === "Account"){
              iconName = focused?  "person" : "person-outline";
              size = focused ? size + 8 : size + 5;
            }else if(route.name === "Favorites"){
              iconName = focused?  "heart" : "heart-outline";
              size = focused ? size + 8 : size + 5;
            }
          return <Ionic name = {iconName} size = {size} color = {color}/>;
          },
        })}
        tabBarOptions = {{
          activeTintColor: 'black',
          inacticeTintColor : 'black',
          showLabel: false,
          style : {
            backgroundColor: '#ffc125',
            height: 60
          }
        }}>
        <Tab.Screen name = "Home" component={HomeScreen} options={{headerShown: false,}}/>
        <Tab.Screen name = "Search" component={SearchScreen} options={{headerShown: false,}}/>
        <Tab.Screen name = "Favorites" component={FavoritesScreen} options={{headerShown: false,}}/>
        <Tab.Screen name = "Account" component={AccountScreen} options={{headerShown: false,}}/>
      </Tab.Navigator>
     </NavigationContainer>
  );
};


export default App;