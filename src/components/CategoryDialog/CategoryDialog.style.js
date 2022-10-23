import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseContainer: {
    alignItems: 'center',
    width: '80%',
    borderRadius: 7,
    elevation: 10,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 15,
    backgroundColor: Colors.white,
    borderBottomColor: '#eee',
  },
  icon: {
    color: Colors.black,
  },
  headText: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
  },
  content: {
    padding: 25,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.black,
  },
  buttonsContainer: {
    paddingHorizontal: 40,
    paddingBottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: Colors.grey,
  },
  button: {
    flex: 1,
    backgroundColor: '#212529',
    borderRadius: 5,
  },
  okButton: {
    backgroundColor: Colors.green,
  },
  cancelButton: {
    backgroundColor: Colors.red,
  },
  clickableCardTextContainer: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: Colors.darkGrey,
  },
});

/*f8f8f8 */
