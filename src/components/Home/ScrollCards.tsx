import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {PEOPLE} from '../../settings/constants';

interface CardProps {
  name: string;
  time: string;
  gym: string;
}

const Card = ({name, time, gym}: CardProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={{paddingHorizontal: 20}}>
      <Shadow
        startColor={'rgba(0, 0, 0, 0.02)'}
        finalColor={'transparent'}
        distance={9}
        viewStyle={{marginBottom: 12, width: '100%'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {name})}
          style={{
            padding: 13,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 9,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 56, width: 56, borderRadius: 7}}
              source={require('../../assets/img/user.png')}
            />
            <View style={{marginLeft: 17}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: 'black',
                  marginBottom: 5,
                }}>
                {name}
              </Text>
              <Text style={{fontSize: 10, fontWeight: '300', color: 'black'}}>
                {gym}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            {time}
          </Text>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default function ScrollCards() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 9, paddingBottom: 60}}>
        {PEOPLE.map(itm => (
          <Card key={itm.id} {...itm} />
        ))}
      </View>
    </ScrollView>
  );
}
