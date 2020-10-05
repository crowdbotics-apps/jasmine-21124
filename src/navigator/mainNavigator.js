import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings128198Navigator from '../features/Settings128198/navigator';
import Settings128164Navigator from '../features/Settings128164/navigator';
import Settings128147Navigator from '../features/Settings128147/navigator';
import Settings128113Navigator from '../features/Settings128113/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings128198: { screen: Settings128198Navigator },
Settings128164: { screen: Settings128164Navigator },
Settings128147: { screen: Settings128147Navigator },
Settings128113: { screen: Settings128113Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
