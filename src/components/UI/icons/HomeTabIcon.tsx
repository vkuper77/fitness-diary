import React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import {SIZE_BAR_ICON} from '../../../settings/constants';

export interface HomeTabIcon {
  color: string;
}

export default function HomeTabIcon({color}: HomeTabIcon) {
  const {width} = useWindowDimensions();
  return (
    <View>
      <View
        style={{
          width: width / 2,
          height: 50,
          backgroundColor: '#F5F5F5',
          position: 'absolute',
          top: -15,
          left: -30,
          borderTopRightRadius: 50,
        }}
      />
      <Image
        style={{
          tintColor: color,
          width: SIZE_BAR_ICON,
          height: SIZE_BAR_ICON,
          marginBottom: 25,
        }}
        source={require('../../../assets/img/home.png')}
      />
    </View>
  );
}
