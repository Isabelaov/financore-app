import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ContainersStyles, TextStyles } from '../assets/styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces';
import { useEarnings } from '../hooks';
import { ScrollView } from 'react-native-gesture-handler';
import { calculateEarningsDifference } from '../utils/calcs/calculateEarningsDiff';
import { AddButton, Loading } from '../components';
import { getDateRange } from '../utils/calcs/getDateRange';
import { CreateEarningModal } from '../components/CreateEarningModal';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

export const HomeScreen = ({ navigation }: Props) => {
  const { earnings, loading } = useEarnings();
  console.log({ earnings });

  const [modalVisible, setModalVisible] = useState(false);

  if (loading) {
    return (
      <View style={ContainersStyles.withHeader}>
        <Loading />
      </View>
    );
  }

  return (
    <ScrollView style={ContainersStyles.withHeader}>
      <View style={ContainersStyles.earningsDifference}>
        <Text style={TextStyles.title}>Money Available</Text>
        <Text style={TextStyles.earningDifference}>
          ${calculateEarningsDifference(earnings)}
        </Text>

        <View style={ContainersStyles.addEarning}>
          <AddButton onPress={() => setModalVisible(true)} />
        </View>

        <CreateEarningModal
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      </View>
    </ScrollView>
  );
};
