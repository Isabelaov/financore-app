import { StyleSheet } from 'react-native';
import { baseColors } from '../colors/baseColors';

export const ContainersStyles = StyleSheet.create({
  bySide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  centered: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  withHeader: {
    paddingTop: 20,
  },
  earningsDifference: {
    borderColor: baseColors.primary,
    borderWidth: 2,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    paddingBottom: 40,
    position: 'relative',
  },
  addEarning: {
    backgroundColor: baseColors.secondary,
    position: 'absolute',
    borderRadius: 30,
    padding: 10,
    bottom: -25,
    left: '45%',
  },
  modalContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '60%',
    borderColor: baseColors.primary,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
  },
});
