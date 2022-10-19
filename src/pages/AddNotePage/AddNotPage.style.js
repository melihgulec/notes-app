import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 18,
    backgroundColor: Colors.white
  },
  iconBtn: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    textAlign: 'center',
  },
});
