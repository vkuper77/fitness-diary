import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderCard from '../components/Home/HeaderCard';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <HeaderCard />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
