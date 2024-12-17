import { StyleSheet } from 'react-native';

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
});
