import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';

import Title from '../../components/Title/Title';
import styles from './NoteDetailPage.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import BottomBar from '../../components/BottomBar/BottomBar';
import ReminderDialog from '../../components/ReminderDialog/ReminderDialog';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import SQLiteService from '../../services/SQLiteService';
import {createLocalNotificationSchedule} from '../../services/NotificationService';
import ClickableCard from '../../components/ClickableCard/ClickableCard';
import CategoryDialog from '../../components/CategoryDialog/CategoryDialog';
import moment from 'moment';

var service = new SQLiteService();

const NoteDetailPage = ({route, navigation}) => {
  const {note, fetchNotes} = route.params;
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [reminderVisibility, setReminderVisibility] = useState(false);
  const [categoriesVisibility, setCategoriesVisibility] = useState(false);
  const [focused, setFocused] = useState(false);

  const descriptionRef = useRef();
  const popupMenuRef = useRef();

  useEffect(() => {
    headerRight();
  }, []);

  const saveNote = useCallback(() => {
    setFocused(false);
    descriptionRef.current.blur();

    service.update(
      'notes',
      {
        title: title,
        description: description,
      },
      {
        id: note.id,
      },
    );

    fetchNotes();
  }, [title, description, fetchNotes, note.id]);

  useLayoutEffect(() => {
    focused
      ? navigation.setOptions({
          headerRight: () => (
            <Icon.Button
              backgroundColor={'transparent'}
              underlayColor={'transparent'}
              color={Colors.mainBlueC}
              size={33}
              style={styles.headerSaveIcon}
              name={'checkmark'}
              onPress={saveNote}
            />
          ),
        })
      : headerRight();
  }, [navigation, saveNote, focused, headerRight]);

  const headerRight = useCallback(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon.Button
            backgroundColor={'transparent'}
            underlayColor={'transparent'}
            color={Colors.black}
            size={25}
            style={styles.headerSaveIcon}
            name={'alarm-outline'}
            onPress={() => setReminderVisibility(true)}
          />
          <Menu ref={popupMenuRef}>
            <MenuTrigger>
              <Icon name={'ellipsis-vertical'} size={22} color={Colors.black} />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption>
                <ClickableCard
                  iconName={'book-outline'}
                  text={'Kategori'}
                  onPress={() => {
                    setCategoriesVisibility(true);
                    popupMenuRef.current.close();
                  }}
                />
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TextInput
          onFocus={() => setFocused(true)}
          onChangeText={text => setTitle(text)}>
          <Title text={title} />
        </TextInput>
        <Text style={styles.dateText}>
          {moment(note.date).format('DD MMM, YYYY')}
        </Text>
        <TextInput
          ref={descriptionRef}
          value={description}
          onFocus={() => setFocused(true)}
          style={styles.descriptionText}
          multiline
          onChangeText={text => setDescription(text)}
        />
      </ScrollView>
      <BottomBar note={note} navigation={navigation} fetchNotes={fetchNotes} />
      <ReminderDialog
        visibility={reminderVisibility}
        setVisibility={setReminderVisibility}
      />
      <CategoryDialog
        visibility={categoriesVisibility}
        setVisibility={setCategoriesVisibility}
      />
    </View>
  );
};

export default NoteDetailPage;
