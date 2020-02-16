import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Screen/Home';
import Mycamera from './Screen/Camera';
import Pass from './Screen/PasswordPage';

const MainNavigator = createStackNavigator({
  Pass: {screen:Pass},
  Home: { screen: HomeScreen },
  Mycamera :{screen:Mycamera},
  
});

const App = createAppContainer(MainNavigator);

export default App;


