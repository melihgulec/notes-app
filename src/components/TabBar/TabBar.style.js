import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    borderBottomWidth: 1.3,
    borderColor: '#e0e0e0',
  },
  titles: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.black,
  },
  tabContents: {
    marginTop: 15,
    flex: 8,
  },
  activeTabBorder: {
    borderBottomColor: 'blue',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: 'black',
  },
});
