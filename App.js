// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mansea" component={ManseaScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home kuy</Text>
      <Button onPress={()=>navigation.navigate('Mansea')} title="Go to Mansea"></Button>
    </View>
  );
}

function ManseaScreens() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mansea Screen</Text>
    </View>
  );
}


export default App;