import React from 'react';
import {Text, View} from 'react-native';

export default function DetailCard({route}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.params.name}</Text>
    </View>
  );
}
