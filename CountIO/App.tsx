import React, { useEffect } from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import IntroScreen from './screens/intro';
import SpecialScreen from './screens/special';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();


function App(props): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // console.log(props.name)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(props.name === "") &&
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{ headerShown: false }} />
        }
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Count.IO' }}
        />
        <Stack.Screen
          name="Special"
          component={SpecialScreen}
          options={{ title: 'Count.IO', headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  const { name } = state.name;
  return { name };
};


export default connect(mapStateToProps)(App);
