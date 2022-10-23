import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingHorizontal: 18,
    backgroundColor: Colors.grey,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 18,
    lineHeight: 35,
    color: Colors.black,
  },
  contentContainer: {
    flexGrow: 1,
  },
  lottieView: {
    position: 'relative',
    height: 200,
  },
});
