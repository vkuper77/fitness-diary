import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {GYMS} from '../../settings/constants';

export default function ScrollPlate() {
  const [state, setState] = useState(0);
  const width: number = useWindowDimensions().width;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollStyle, {width}]}>
      <View style={styles.wrapper}>
        <Shadow
          startColor={'rgba(0, 0, 0, 0.02)'}
          finalColor={'transparent'}
          distance={5}>
          <View style={styles.container}>
            {GYMS.map((itm: {id: number; name: string}, i: number) => {
              const active: boolean = i === state;
              return (
                <Shadow
                  startColor={active ? 'rgba(0, 0, 0, 0.03)' : 'transparent'}
                  finalColor={'transparent'}
                  distance={9}>
                  <TouchableOpacity
                    onPress={() => setState(itm.id)}
                    style={{
                      backgroundColor: active ? 'white' : 'transparent',
                      borderRadius: active ? 12 : 0,
                    }}>
                    <Text
                      style={[
                        styles.text,
                        {color: active ? '#000000' : '#C9C9C9'},
                      ]}>
                      {itm.name}
                    </Text>
                  </TouchableOpacity>
                </Shadow>
              );
            })}
          </View>
        </Shadow>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    flexGrow: 0,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
  },
  text: {
    paddingTop: 6,
    paddingBottom: 7,
    paddingHorizontal: 24,
    fontSize: 12,
    fontWeight: '500',
  },
});
