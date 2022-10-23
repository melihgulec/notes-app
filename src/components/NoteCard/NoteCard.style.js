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
    fontSize: TextSizes.big,
    color: Colors.black,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  description: {
    lineHeight: 22,
    fontSize: 15,
    color: Colors.black,
  },
  dateText: {
    color: Colors.black,
    paddingLeft: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  interactionContainer: {
    flexDirection: 'row',
  },
  favIcon: {
    paddingRight: 10,
  },
});
