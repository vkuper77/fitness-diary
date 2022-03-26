import React, {useState, Dispatch, SetStateAction} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {WEEK_DAYS} from '../../settings/constants';
import LinearGradient from 'react-native-linear-gradient';
import Burger from '../UI/icons/Burger';
import {useNavigation, DrawerActions} from '@react-navigation/native';

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

const HeaderCard = () => {
  const [active, setActive] = useState(4);
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Shadow
        offset={[0, 4]}
        startColor={'rgba(0, 0, 0, 0.05)'}
        finalColor={'transparent'}
        distance={15}
        viewStyle={{width: '100%'}}>
        <>
          <View style={styles.header}>
            <View>
              <Text style={styles.textDate}>15 февраля, 2022</Text>
              <Text style={styles.textWelcome}>Привет, Денис!</Text>
            </View>
            <Pressable
              style={{marginRight: 20}}
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}>
              {({pressed}) => (
                <Shadow
                  startColor={'rgba(0, 0, 0, 0.05)'}
                  finalColor={'transparent'}
                  distance={pressed ? 1 : 5}>
                  <View style={[styles.btn, {opacity: pressed ? 0.5 : 1}]}>
                    <Burger />
                  </View>
                </Shadow>
              )}
            </Pressable>
          </View>
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
        </>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  container: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  wrapperDay: {
    alignItems: 'center',
    borderRadius: 26,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 40,
    paddingLeft: 25,
    paddingBottom: 22,
  },
  textDate: {
    fontSize: 14,
    color: '#222222',
    fontWeight: '300',
    marginBottom: 6,
  },
  textWelcome: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222222',
  },
  btn: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderCard;
