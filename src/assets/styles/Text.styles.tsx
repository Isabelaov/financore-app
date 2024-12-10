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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
