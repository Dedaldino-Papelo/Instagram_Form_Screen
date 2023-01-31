import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Register from './components/Register'
import { globalStyle } from './global/style';

export default function App() {
  return (
    <View style={globalStyle.container}>
      <Register />
    </View>
  );
}
