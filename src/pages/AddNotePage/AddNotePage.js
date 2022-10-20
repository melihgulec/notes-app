import React, {useEffect, useState} from 'react';
import {View, LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';
import styles from './AddNotPage.style';
import Title from '../../components/Title/Title';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import BasicButton from '../../components/BasicButton/BasicButton';

import SQLiteService from '../../services/SQLiteService';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const service = new SQLiteService();

const AddNotePage = ({navigation, route}) => {
  const {fetchNotes} = route.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const addNoteToDatabase = () => {
    service.insert('notes', {
      title: title,
      description: description,
      date: '2022-10-19',
    });

    fetchNotes();
    navigateDetailPage();
  };

  const navigateDetailPage = () => {
    navigation.pop();
    navigation.push('NoteDetailPage', {
      note: {
        title: title,
        description: description,
        date: Date.now(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon.Button
          name={'arrow-back'}
          style={styles.iconBtn}
          underlayColor={'transparent'}
          onPress={navigateBack}
          backgroundColor={'transparent'}
          color={Colors.black}
          size={33}
        />
        <Title style={styles.titleContainer} text={'Add Note'} />
      </View>
      <WhiteSpace />
      <InputWithLabel
        onChangeText={text => setTitle(text)}
        label={'Title'}
        placeholder={'The title of a note'}
      />
      <WhiteSpace />
      <InputWithLabel
        style={{flex: 1, marginBottom: 25}}
        onChangeText={text => setDescription(text)}
        label={'Description'}
        multiLine
        numberOfLines={15}
        placeholder={'Type something'}
      />
      <WhiteSpace />
      <BasicButton text={'Create'} onPress={addNoteToDatabase} />
    </View>
  );
};

export default AddNotePage;
