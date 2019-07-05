import {createStackNavigator, createAppContainer} from 'react-navigation';
import ListArticle from './main/ListArticle';
import HomeScreen from './HomeScreen';
import MainScreen from './main/MainScreen';
import Tab from './main/TabNav';
import DetailScreen from './main/DetailScreen';
import Search from './search/Search';
const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  MainScreen :MainScreen,
  Search: { screen: Search }
  ,
  Tab:Tab,
  ListArticle: {
    screen:ListArticle
  },
  DetailScreen:DetailScreen
},{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#17A2B8',
      height:50
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize:18
    },
  },
}

);
const App = createAppContainer(MainNavigator);
export default App;