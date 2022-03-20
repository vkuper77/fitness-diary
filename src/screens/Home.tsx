import React from 'react';
import {StyleSheet, View} from 'react-native';
import WelcomePage from '../components/Home/WelcomePage';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <WelcomePage />
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
