import React from 'react';
import {Image, View} from 'react-native';

export default function AddTabIcon() {
  return (
    <View style={{width: 59, height: 59}}>
      <Image
        style={{width: 59, height: 59, position: 'absolute', bottom: 12}}
        source={require('../../../assets/img/add.png')}
      />
    </View>
  );
}
