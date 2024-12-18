import React from 'react';
import { Text, View } from 'react-native';
import { ContainersStyles } from '../assets/styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces';
import { useEarnings } from '../hooks';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EarningsSummary'
>;

interface Props {
  navigation: NavigationProp;
}

export const EarningsSummaryScreen = ({ navigation }: Props) => {
  const { earnings, loading, getEarnings } = useEarnings();
  return (
    <View style={ContainersStyles.withHeader}>
      <Text>Earnings Summary Screen</Text>
    </View>
  );
};
