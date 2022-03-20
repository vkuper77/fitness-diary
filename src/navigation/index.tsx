import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabIcon from '../components/UI/icons/HomeTabIcon';
import CalendarTabIcon from '../components/UI/icons/CalendarTabIcon';
import NoteBookTabIcon from '../components/UI/icons/NoteBookTabIcon';
import ProfileTabIcon from '../components/UI/icons/ProfileTabIcon';
import AddTabIcon from '../components/UI/icons/AddTabIcon';
import HomeScreen from '../screens/Home';
import CalendarScreen from '../screens/Calendar';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
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

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={optionsNavigator}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: e => <HomeTabIcon color={e.color} />,
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarStackScreen}
          options={{
            tabBarIcon: e => <CalendarTabIcon color={e.color} />,
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddStackScreen}
          options={{
            tabBarIcon: () => <AddTabIcon />,
          }}
        />
        <Tab.Screen
          name="Notebook"
          component={NotebookStackScreen}
          options={{
            tabBarIcon: e => <NoteBookTabIcon color={e.color} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: e => <ProfileTabIcon color={e.color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions: Object = {
  contentStyle: {
    backgroundColor: 'white',
  },
  headerShown: false,
};

const optionsNavigator: Object = {
  headerShown: false,
  tabBarActiveTintColor: '#7956E2',
  tabBarInactiveTintColor: '#3E3E3E',
  tabBarStyle: {
    backgroundColor: '#F5F5F5',
    position: 'absolute',
    bottom: -10,
  },
  title: '',
};
