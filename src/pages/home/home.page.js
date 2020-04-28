import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ExplorePage from '../explore/explore.page';
import ProfilePage from '../profile/profile.page';
import LocationPage from '../location/location.page';
import ChatPage from '../chat/chat.page';
import SettingsPage from '../setting/setting.page';

const Tabs = createBottomTabNavigator();

const Routes = {
  explore: {
    routeName: 'explore',
    component: ExplorePage,
  },
  profile: {
    routeName: 'profile',
    component: ProfilePage,
  },
  location: {
    routeName: 'location',
    component: LocationPage,
  },
  chat: {
    routeName: 'chat',
    component: ChatPage,
  },
  settings: {
    routeName: 'settings',
    component: SettingsPage,
  },
};

export default () => {
  return (
    <Tabs.Navigator initialRouteName={Routes.explore.routeName}>
      <Tabs.Screen
        name={Routes.explore.routeName}
        component={Routes.explore.component}
      />
      <Tabs.Screen
        name={Routes.profile.routeName}
        component={Routes.profile.component}
      />
      <Tabs.Screen
        name={Routes.location.routeName}
        component={Routes.location.component}
      />
      <Tabs.Screen
        name={Routes.chat.routeName}
        component={Routes.chat.component}
      />
      <Tabs.Screen
        name={Routes.settings.routeName}
        component={Routes.settings.component}
      />
    </Tabs.Navigator>
  );
};
