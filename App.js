import 'react-native-gesture-handler';
import { View } from 'react-native';
import Login from './components/Login';
import RegisterPhone from './components/RegisterPhone'
import RegisterEmail from './components/RegisterEmail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import Home from './components/Home';

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F0faff"
          },
          
        }}
      >
        <Stack.Screen name='Signin' options={{ title: '' }} component={Login} />
        <Stack.Screen name='Signupphone' options={{ title: '' }} component={RegisterPhone} />
        <Stack.Screen name='Signupemail' options={{ title: '' }} component={RegisterEmail} />
        <Stack.Screen name ='Home' options={{title: ''}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
