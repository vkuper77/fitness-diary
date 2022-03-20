import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CalendarScreen({route}: any) {
  return (
    <View style={styles.wrapper}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#D18CE0'}}>
        {route.name + ' screen'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
