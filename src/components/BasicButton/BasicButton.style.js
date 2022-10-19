import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.mainBlueC,
    borderRadius: 17,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 12,
    color: Colors.white,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
