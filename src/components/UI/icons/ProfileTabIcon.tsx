import React from 'react';
import {Image} from 'react-native';

export interface ProfileTabIcon {
  color: string | null;
}

export default function ProfileTabIcon({color}: ProfileTabIcon) {
  const width: number = 25;
  const height: number = 21;
  const tint: object = color ? {tintColor: color} : {};
  return (
    <Image
      style={[{width, height}, tint]}
      source={require('../../../assets/img/profile.png')}
    />
  );
}
