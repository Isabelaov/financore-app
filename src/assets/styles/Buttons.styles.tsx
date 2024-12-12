import { StyleSheet } from 'react-native';
import { baseColors } from '../colors/baseColors';

export const ButtonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: baseColors.primary,
    padding: 5,
    borderRadius: 10,
    width: 150,
    margin: 20,
    alignSelf: 'center',
  },
  secondaryButton: {
    backgroundColor: baseColors.secondary,
    padding: 5,
    borderRadius: 10,
    width: 150,
    margin: 20,
    alignSelf: 'center',
  },
});
