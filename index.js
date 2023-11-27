import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('Calculadora', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('Calculadora');
    AppRegistry.runApplication('Calculadora', { rootTag });
}