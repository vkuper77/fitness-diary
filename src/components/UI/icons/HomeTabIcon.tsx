import React from 'react';
import {Image, View} from 'react-native';

export interface HomeTabIcon {
  color: string | null;
}

export default function HomeTabIcon({color}: HomeTabIcon) {
  const width: number = 22;
  const height: number = 21;
  const tint: object = color ? {tintColor: color} : {};
  return (
    <View>
      <Image
        style={[{width, height}, tint]}
        source={require('../../../assets/img/home.png')}
      />
    </View>
  );
}
