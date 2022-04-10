import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import HeaderCard from '../components/Home/HeaderCard';
import ScrollPlate from '../components/Home/ScrollPlate';
import ScrollCards from '../components/Home/ScrollCards';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <HeaderCard />
      <View style={{marginTop: 22}}>
        <ScrollPlate />
      </View>
      <ScrollCards />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
