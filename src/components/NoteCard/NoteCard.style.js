import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import TextSizes from '../../constants/TextSizes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.grey,
  },
  contentContainer: {
    padding: 12,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: TextSizes.big,
    color: Colors.black,
    marginBottom: 5,
  },
  description: {
    lineHeight: 22,
  },
  dateText: {
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
