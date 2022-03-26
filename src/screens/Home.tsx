import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderCard from '../components/Home/HeaderCard';
import ScrollPlate from '../components/Home/ScrollPlate';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <HeaderCard />
      <View style={{marginTop: 22}}>
        <ScrollPlate />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
