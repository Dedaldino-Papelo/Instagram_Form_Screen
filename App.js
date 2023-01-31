import 'react-native-gesture-handler';
import { View } from 'react-native';
import Login from './components/Login';
import Register from './components/Register'
import { globalStyle } from './global/style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={globalStyle.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
