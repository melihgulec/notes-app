import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingHorizontal: 18,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
