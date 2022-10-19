import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import BasicButton from '../../components/BasicButton/BasicButton';
import ChipBadgeButton from '../../components/ChipBadgeButton/ChipBadgeButton';
import NoteCard from '../../components/NoteCard/NoteCard';

import Title from '../../components/Title/Title';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import styles from './NoteListPage.style';
import data from '../../data/noteData';
import Icon from 'react-native-vector-icons/Ionicons';

import SQLiteService from '../../services/SQLiteService';

var service = new SQLiteService();

const NoteListPage = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    service.init();

    service.createTable('notes', [
      {
        name: 'id',
        dataType: 'integer',
        isNotNull: true,
        options: 'PRIMARY KEY AUTOINCREMENT',
      },
      {
        name: 'title',
        dataType: 'text',
      },
      {
        name: 'description',
        dataType: 'text',
      },
      {
        name: 'date',
        dataType: 'date',
      },
    ]);

    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    var result = await service.select('notes');
    setNotes(result);
  };

  const renderNoteCards = item => {
    return <NoteCard note={item.item} />;
  };

  const navigateAddNotePage = () => {
    navigation.push('AddNotePage', {
      fetchNotes: fetchNotes,
    });
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={notes}
      renderItem={renderNoteCards}
      ItemSeparatorComponent={() => <WhiteSpace />}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <Title text={'Notes'} />
          <WhiteSpace />
          <View style={styles.header}>
            <ChipBadgeButton>
              <Icon name={'filter'} size={15} />
            </ChipBadgeButton>
            <BasicButton
              text={'Add Note'}
              iconName={'add'}
              onPress={navigateAddNotePage}
            />
          </View>
        </View>
      )}
      ListFooterComponent={() => <WhiteSpace />}
      ListEmptyComponent={() => (
        <View syle={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>List is empty. Go add note!</Text>
        </View>
      )}
    />
  );
};

export default NoteListPage;
