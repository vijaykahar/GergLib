import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from 'src/routes/router'
import React from 'react'
import * as ROUTE from 'src/constants/routeName'
import Login from 'src/screens/auth/Login'
import Splash from 'src/screens/auth/Splash'




const Stack = createStackNavigator()

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode={'none'}>
      <Stack.Screen name={ROUTE.SPLASH} component={Splash} />
      <Stack.Screen name={ROUTE.LOGIN} component={Login} />
    </Stack.Navigator>
  )
}

export const Auth = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName={ROUTE.SPLASH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTE.SPLASH} component={StackScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

// export const MusicMileTab = () => (
//   <NavigationContainer ref={navigationRef}>
//     <App />

//   </NavigationContainer>
// );
