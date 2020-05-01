import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import ExplorePage from '../explore/explore.page';
import ProfilePage from '../profile/profile.page';
import LocationPage from '../location/location.page';
import ChatPage from '../chat/chat.page';
import SettingsPage from '../setting/setting.page';
import Header from '../../components/header/header.component';

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
        tabBarIcon: ({color}) => {
          return (
            <Icon
              name={Routes[route.name.trim()].icon}
              color={color}
              size={18}
            />
          );
        },
        title: () => {},
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true,
        style: {
          backgroundColor: 'white',
          elevation: 10,
          borderRadius: 20,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 10,
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
