import { StyleSheet } from 'react-native';
import { baseColors } from '../colors/baseColors';

export const OtpInputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 10,
  },
  textInput: {
    borderColor: baseColors.primary,
    borderWidth: 3,
    borderRadius: 20,
  },
});
