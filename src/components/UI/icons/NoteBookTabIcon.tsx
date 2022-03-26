import React from 'react';
import {Image} from 'react-native';

export interface NoteBookTabIcon {
  color: string | null;
}

export default function NoteBookTabIcon({color}: NoteBookTabIcon) {
  const width: number = 18;
  const height: number = 21;
  const tint: object = color ? {tintColor: color} : {};
  return (
    <Image
      style={[{width, height}, tint]}
      source={require('../../../assets/img/note-book.png')}
    />
  );
}
