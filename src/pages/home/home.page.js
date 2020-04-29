import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';

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
    icon: 'home',
  },
  profile: {
    routeName: 'profile',
    component: ProfilePage,
    icon: 'user',
  },
  location: {
    routeName: 'location',
    component: LocationPage,
    icon: 'map-marker-alt',
  },
  chat: {
    routeName: 'chat',
    component: ChatPage,
    icon: 'comments',
  },
  settings: {
    routeName: 'settings',
    component: SettingsPage,
    icon: 'ellipsis-h',
  },
};

export default () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return (
            <Icon
              name={Routes[route.name.trim()].icon}
              color={color}
              size={size}
            />
          );
        },
        title: () => {},
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
          elevation: 10,
          borderRadius: 20,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 10,
          marginTop: 10,
        },
        tabStyle: {
          // elevation: 10,
          borderRadius: 20,
          // backgroundColor: 'transparent',
        },
      }}>
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
