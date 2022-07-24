import { StyleSheet } from 'react-native';
import styles from '../../../../fonts/styles';

const SendStyles = StyleSheet.create({
  title: {
    marginTop: 54,
    fontSize: 26,
    color: '#000',
    fontFamily: styles.medium,
    textAlign: 'center',
    backgroundColor: '#F3F5F6',
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#F3F5F6',
  },

  searchBar: {
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF',
    width: 325,
    height: 55,
    textAlign: 'center',
    fontSize: 14,
    color: '#9395A4',
  },
});
export default SendStyles;
