import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/login';
import Signup from './src/pages/signup';
import Listing from './src/pages/listing';
import Home from './src/pages/home'

const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title:'Início',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Signup"
        component={Signup}
        />

        <Stack.Screen
        name="Listing"
        component={Listing}
        />

<Stack.Screen
        name="Home"
        component={Home}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
