import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeTabIcon from '../components/UI/icons/HomeTabIcon';
import CalendarTabIcon from '../components/UI/icons/CalendarTabIcon';
import AddTabIcon from '../components/UI/icons/AddTabIcon';
import NoteBookTabIcon from '../components/UI/icons/NoteBookTabIcon';
import ProfileTabIcon from '../components/UI/icons/ProfileTabIcon';

const handlerIcon = (key: string, color: string | null) => {
  switch (key.toLocaleLowerCase()) {
    case 'home':
      return <HomeTabIcon color={color} />;
    case 'calendar':
      return <CalendarTabIcon color={color} />;
    case 'add':
      return <AddTabIcon />;
    case 'notebook':
      return <NoteBookTabIcon color={color} />;
    case 'settings':
      return <ProfileTabIcon color={color} />;
    default:
      return <Text style={{color: color ? color : ''}}>{key}</Text>;
  }
};

export default function TabBarContext({state, navigation}: any) {
  return (
    <View>
      <ImageBackground
        style={styles.wrapper}
        source={require('../assets/img/bar.png')}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
              {handlerIcon(route.name, isFocused ? null : '#3E3E3E')}
            </TouchableOpacity>
          );
        })}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 37,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
