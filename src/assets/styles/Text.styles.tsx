import { StyleSheet } from 'react-native';
import { baseColors } from '../colors/baseColors';

export const TextStyles = StyleSheet.create({
  error: {
    margin: 5,
    fontSize: 15,
    color: '#b24242',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: baseColors.primary,
    margin: 15,
    textAlign: 'center',
  },
  titleSecondary: {
    color: baseColors.secondary,
    margin: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: baseColors.buttonText,
  },
});
