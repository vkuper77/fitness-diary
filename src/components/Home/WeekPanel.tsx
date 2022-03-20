import React, {useState, Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {WEEK_DAYS} from '../../settings/constants';
import LinearGradient from 'react-native-linear-gradient';

type DayProps = {
  itm: {id: number; day: string; date: number};
  active: boolean;
  setActive: Dispatch<SetStateAction<number>>;
};

const Day = ({itm, active, setActive}: DayProps) => {
  const colors = active ? ['#7956E2', '#BAA9EC'] : ['white', 'white'];
  const color = {color: active ? 'white' : '#C1C4CB'};

  return (
    <TouchableOpacity
      activeOpacity={active ? 1 : 0.5}
      onPress={() => setActive(itm.id)}>
      <LinearGradient
        start={{x: 0, y: 0.25}}
        end={{x: 1, y: 1.2}}
        colors={colors}
        style={styles.wrapperDay}>
        <Text style={[styles.day, color]}>{itm.day}</Text>
        <View style={styles.ellipse}>
          <Text style={styles.date}>{itm.date}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const WeekPanel = () => {
  const [active, setActive] = useState(5);
  return (
    <View style={styles.wrapper}>
      <Shadow
        offset={[0, 4]}
        startColor={'#3E2D711F'}
        finalColor={'transparent'}
        distance={10}
        viewStyle={{width: '100%'}}>
        <View style={styles.container}>
          {WEEK_DAYS.map(itm => (
            <Day
              key={itm.id}
              itm={itm}
              active={active === itm.id}
              setActive={setActive}
            />
          ))}
        </View>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginTop: 13},
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  wrapperDay: {
    alignItems: 'center',
    borderRadius: 26,
    marginTop: 13,
    marginBottom: 18,
  },
  day: {
    fontSize: 9,
    lineHeight: 10,
    fontWeight: '600',
    color: 'white',
    marginTop: 11,
    marginBottom: 2,
  },
  ellipse: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  date: {
    fontSize: 20,
    color: '#222222',
    fontWeight: '600',
  },
});

export default WeekPanel;
