import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import TrailScreen from '../screens/Trail/TrailScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Traseu: TrailScreen,
  },
  {
    initialRouteName: 'Home',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);
 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;