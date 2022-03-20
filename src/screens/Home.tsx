import React from 'react';
import {StyleSheet, View} from 'react-native';
import WelcomePage from '../components/Home/WelcomePage';
import WeekPanel from '../components/Home/WeekPanel';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <WelcomePage />
      <WeekPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 32,
  },
});
