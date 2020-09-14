import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings101238Navigator from '../features/Settings101238/navigator';
import UserProfile101224Navigator from '../features/UserProfile101224/navigator';
import Tutorial101223Navigator from '../features/Tutorial101223/navigator';
import NotificationList101195Navigator from '../features/NotificationList101195/navigator';
import Settings101194Navigator from '../features/Settings101194/navigator';
import Settings101186Navigator from '../features/Settings101186/navigator';
import UserProfile101184Navigator from '../features/UserProfile101184/navigator';
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
Settings101238: { screen: Settings101238Navigator },
UserProfile101224: { screen: UserProfile101224Navigator },
Tutorial101223: { screen: Tutorial101223Navigator },
NotificationList101195: { screen: NotificationList101195Navigator },
Settings101194: { screen: Settings101194Navigator },
Settings101186: { screen: Settings101186Navigator },
UserProfile101184: { screen: UserProfile101184Navigator },
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
