import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 15,
    color: Colors.black,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: Colors.black,
  },
  placeHolderText: {
    color: Colors.darkGrey,
  },
});
