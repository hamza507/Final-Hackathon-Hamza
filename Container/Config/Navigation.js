import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home"; 
import Signup from "../Screens/signup";
import Studentform from "../Screens/Studentform";
import Studentlogin from "../Screens/Studentlogin";
import Cart from "../Screens/Card";
import Adminform from "../Screens/adminlogin";
import Companycard from "../Screens/Companycard";
import Button from "../Screens/detail";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false} }/>
        <Stack.Screen name="Studentlogin" component={Studentlogin}  options={{headerShown:false} }/>
        <Stack.Screen name="signup" component={Signup}  options={{headerShown:false} }/>
        <Stack.Screen name="Adminform" component={Adminform}  options={{headerShown:false} }/>
        <Stack.Screen name="Studentform" component={Studentform}  options={{headerShown:false} }/>
      <Stack.Screen name="Card" component={Companycard}  options={{headerShown:false} }/>
        <Stack.Screen name="Cart" component={Cart}  options={{headerShown:false} }/>
      <Stack.Screen name="Button" component={Button}  options={{headerShown:false} }/>



        


        



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
