import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const WelcomePage = () => (
  <View style={styles.wrapper}>
    <View>
      <Text style={styles.textDate}>15 февраля, 2022</Text>
      <Text style={styles.textWelcome}>Привет, Денис!</Text>
    </View>
    <Shadow
      offset={[0, 3]}
      startColor={'#E5E5E5'}
      finalColor={'transparent'}
      distance={5}>
      <Image source={require('../../assets/img/user.png')} style={styles.img} />
    </Shadow>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDate: {
    fontSize: 14,
    color: '#222222',
    fontWeight: '300',
  },
  textWelcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
  },
  img: {
    width: 69,
    height: 69,
    borderRadius: 7,
  },
});

export default WelcomePage;
