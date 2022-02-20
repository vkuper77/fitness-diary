import React from 'react';
import {Image} from 'react-native';
import {SIZE_BAR_ICON} from '../../../settings/constants';

export interface ProfileTabIcon {
  color: string;
}

export default function ProfileTabIcon({color}: ProfileTabIcon) {
  return (
    <Image
      style={{
        tintColor: color,
        width: SIZE_BAR_ICON,
        height: SIZE_BAR_ICON,
        marginBottom: 25,
      }}
      source={require('../../../assets/img/profile.png')}
    />
  );
}
