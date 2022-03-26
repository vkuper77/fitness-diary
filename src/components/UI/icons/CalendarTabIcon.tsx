import React from 'react';
import {Image} from 'react-native';

export interface CalendarTabIcon {
  color: string | null;
}

export default function CalendarTabIcon({color}: CalendarTabIcon) {
  const width: number = 21;
  const height: number = 21;
  const tint: object = color ? {tintColor: color} : {};
  return (
    <Image
      style={[{width, height}, tint]}
      source={require('../../../assets/img/date.png')}
    />
  );
}
