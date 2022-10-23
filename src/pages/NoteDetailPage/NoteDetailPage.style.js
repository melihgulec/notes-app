import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  scroll: {
    padding: 18,
  },
  dateText: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.black,
  },
  descriptionText: {
    padding: 0,
    marginTop: 25,
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
    textAlignVertical: 'top',
  },
  descriptionContainer: {
    marginTop: 25,
  },
  headerSaveIcon: {
    padding: 0,
    margin: 0,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
