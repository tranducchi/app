import {createStackNavigator, createAppContainer} from 'react-navigation';
import ListArticle from './main/ListArticle';
import HomeScreen from './HomeScreen';
import MainScreen from './main/MainScreen';
import Tab from './main/TabNav';
import TestHeader from './header/TestHeader'
const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  MainScreen :MainScreen,
  Tab:Tab,
  ListArticle: {
    screen:ListArticle
  },
},{
  initialRouteName: "Home"
}

);
const App = createAppContainer(MainNavigator);
export default App;