import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Home";
import ScreenMap from "./src/Screens/ScreenMap";
import ScreenCam from "./src/Screens/ScreenCam";
import ScreenMess from "./src/Screens/ScreenMess";
import ScreenLogin from "./src/Screens/ScreenLogin";
import Screenregistration from "./src/Screens/Screenregistration";
import 'react-native-gesture-handler';
import Screenmenu from "./src/Screens/Screenmenu";


const Stack = createNativeStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ScreenLogin} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Map" component={ScreenMap} options={{headerShown:false}}/>
        <Stack.Screen name="Camera" component={ScreenCam} options={{headerShown:false}}/>
        <Stack.Screen name="Mess" component={ScreenMess} options={{headerShown:false}}/>
        <Stack.Screen name="Menu" component={Screenmenu} options={{headerShown:false}}/>
        <Stack.Screen name="registration" component={Screenregistration} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



