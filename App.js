// App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import InformacionScreens from './screens/InformacionScreens'; // Importa InformacionScreens
import TestScreens from './screens/TestScreens'; // Importa TestScreens
import CitasScreens from './screens/CitasScreens'; // Importa CitasScreens
import ChatScreens from './screens/ChatScreens'; // Importa ChatScreens
import UserScreen from './screens/UserScreen';
import SettingsScreen from './screens/SettingsScreen';
import InformacionScreens2 from './screens/InformacionScreens2';
import TestScreens2 from './screens/TestScreens2';
import CitasScreens2 from './screens/CitasScreens2';
import PsicologicoScreen from './screens/psicologicoScreen';
import PsiquiatriaScreen from './screens/psiquiatriaScreen';
import BienestarSocialScreen from './screens/BienestarSocialScreen';
import TestPsicologiaScreen from './screens/TestPsicologiaScreen';
import TestPsiquiatriaScreen from './screens/TestPsiquiatriaScreen';
import CitaRegistrada from './screens/CitaRegistrada';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="InformacionScreens" component={InformacionScreens} /> 
          <Stack.Screen name="TestScreens" component={TestScreens} /> 
          <Stack.Screen name="CitasScreens" component={CitasScreens} /> 
          <Stack.Screen name="ChatScreens" component={ChatScreens} /> 
          <Stack.Screen name="UserScreen" component={UserScreen} /> 
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="InformacionScreens2" component={InformacionScreens2} />
          <Stack.Screen name="TestScreens2" component={TestScreens2} />     
          <Stack.Screen name="CitasScreens2" component={CitasScreens2} />
          <Stack.Screen name="PsicologicoScreen" component={PsicologicoScreen} />
          <Stack.Screen name="PsiquiatriaScreen" component={PsiquiatriaScreen} />
          <Stack.Screen name="BienestarSocialScreen" component={BienestarSocialScreen} /> 
          <Stack.Screen name="TestPsicologiaScreen" component={TestPsicologiaScreen} /> 
          <Stack.Screen name="TestPsiquiatriaScreen" component={TestPsiquiatriaScreen} />
          <Stack.Screen name="CitaRegistrada" component={CitaRegistrada} />               
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
