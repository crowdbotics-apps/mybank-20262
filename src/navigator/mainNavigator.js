import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile101153Navigator from '../features/UserProfile101153/navigator';
import Tutorial101152Navigator from '../features/Tutorial101152/navigator';
import NotificationList101124Navigator from '../features/NotificationList101124/navigator';
import Settings101123Navigator from '../features/Settings101123/navigator';
import Settings101115Navigator from '../features/Settings101115/navigator';
import UserProfile101113Navigator from '../features/UserProfile101113/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile101153: { screen: UserProfile101153Navigator },
Tutorial101152: { screen: Tutorial101152Navigator },
NotificationList101124: { screen: NotificationList101124Navigator },
Settings101123: { screen: Settings101123Navigator },
Settings101115: { screen: Settings101115Navigator },
UserProfile101113: { screen: UserProfile101113Navigator },

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
