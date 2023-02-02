import 'react-native-gesture-handler';
import { View } from 'react-native';
import Login from './components/Login';
import RegisterPhone from './components/RegisterPhone'
import RegisterEmail from './components/RegisterEmail';
import { globalStyle } from './global/style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: "#F0faff"
            }
          }}
        >
          <Stack.Screen name='Signin' options={{title: ''}} component={Login} />
          <Stack.Screen name='Signupphone' options={{title: ''}}  component={RegisterPhone} />
          <Stack.Screen name='Signupemail' options={{title: ''}}  component={RegisterEmail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
