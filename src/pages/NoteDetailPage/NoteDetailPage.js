import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';

import Title from '../../components/Title/Title';
import styles from './NoteDetailPage.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

import SQLiteService from '../../services/SQLiteService';
import DetailBottomBar from '../../components/DetailBottomBar/DetailBottomBar';

var service = new SQLiteService();

const NoteDetailPage = ({route, navigation}) => {
  const {note, fetchNotes} = route.params;
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const descriptionRef = useRef();

  const saveNote = () => {
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
  };

  const onFocus = () => {
    navigation.setOptions({
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
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TextInput onFocus={onFocus} onChangeText={text => setTitle(text)}>
          <Title text={title} />
        </TextInput>
        <Text style={styles.dateText}>{note.date}</Text>
        <TextInput
          ref={descriptionRef}
          value={description}
          onFocus={onFocus}
          style={styles.descriptionText}
          multiline
          onChangeText={text => setDescription(text)}
        />
      </ScrollView>
      <DetailBottomBar />
    </View>
  );
};

export default NoteDetailPage;
