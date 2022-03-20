import React from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SIZE = 51;

export default function AddTabIcon() {
  const {width} = useWindowDimensions();
  return (
    <View>
      <View
        style={{
          width: width / 2,
          height: 50,
          backgroundColor: '#F5F5F5',
          position: 'absolute',
          top: -2,
          right: -width / 2 + 24,
          borderTopLeftRadius: 50,
        }}
      />
      <LinearGradient
        start={{x: 0, y: 0.25}}
        end={{x: 1, y: 1.2}}
        colors={['#7956E2', '#BAA9EC']}
        style={styles.gradient}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../../assets/img/plus.png')}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#7956E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
});
