import { StyleSheet } from 'react-native';
import { baseColors } from '../colors/baseColors';

export const FormStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: baseColors.primary,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: baseColors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 10,
    color: '#000',
  },
});
