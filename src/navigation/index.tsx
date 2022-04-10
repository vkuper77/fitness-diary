import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CalendarScreen from '../screens/Calendar';
import TabBarContext from './TabBarContext';
import HomeScreen from '../screens/Home';
import DetailCard from '../screens/DetailCard';

import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailCard} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen name="Settings" component={CalendarScreen} />
    </SettingsStack.Navigator>
  );
}

const CalendarStack = createNativeStackNavigator();

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator screenOptions={screenOptions}>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
    </CalendarStack.Navigator>
  );
}

const AddStack = createNativeStackNavigator();

function AddStackScreen() {
  return (
    <AddStack.Navigator screenOptions={screenOptions}>
      <AddStack.Screen name="Add" component={CalendarScreen} />
    </AddStack.Navigator>
  );
}

const NotebookStack = createNativeStackNavigator();

function NotebookStackScreen() {
  return (
    <NotebookStack.Navigator screenOptions={screenOptions}>
      <NotebookStack.Screen name="Notebook" component={CalendarScreen} />
    </NotebookStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStackScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      screenOptions={{headerShown: false}}
      drawerContent={() => <View />}>
      <Drawer.Screen name="Root" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={p => <TabBarContext {...p} />}>
        <Tab.Screen name="Home" component={DrawerStackScreen} />
        <Tab.Screen name="Calendar" component={CalendarStackScreen} />
        <Tab.Screen name="Add" component={AddStackScreen} />
        <Tab.Screen name="Notebook" component={NotebookStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions: Object = {
  contentStyle: {
    backgroundColor: '#FBFBFB',
  },
  headerShown: false,
};
