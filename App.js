import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from './app/views/screens/SignInScreen'
import SignUpScreen from './app/views/screens/SignUpScreen'

const Stack=createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header:()=>null
        }}>
        <Stack.Screen name='SignIn' component={SignInScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
