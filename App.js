import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CallScreen from './Call';
import ChatScreen from './Chat';
import SettingsScreen from './Settings';
import CameraScreen from './Camera';
import StatusScreen from './Status';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Call" component={CallScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
