import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';

import BasicButton from '../../components/BasicButton/BasicButton';
import ChipBadgeButton from '../../components/ChipBadgeButton/ChipBadgeButton';
import NoteCard from '../../components/NoteCard/NoteCard';
import Title from '../../components/Title/Title';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import styles from './NoteListPage.style';
import SQLiteService from '../../services/SQLiteService';

var service = new SQLiteService();

const NoteListPage = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    var result = await service.select('notes');
    setNotes(result);
  };

  const renderNoteCards = item => {
    return (
      <NoteCard
        note={item.item}
        onPress={() => navigateNoteDetailPage(item.item)}
      />
    );
  };

  const navigateAddNotePage = () => {
    navigation.push('AddNotePage', {
      fetchNotes: fetchNotes,
    });
  };

  const navigateNoteDetailPage = note => {
    navigation.push('NoteDetailPage', {note, fetchNotes});
  };

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
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
        <View style={styles.emptyListContainer}>
          <Lottie
            source={require('../../../assets/animations/Empty/empty.json')}
            style={styles.lottieView}
            autoPlay
            loop
          />
          <Text style={styles.emptyListText}>
            It's empty here.{'\n'}Go and add some notes.
          </Text>
        </View>
      )}
    />
  );
};

export default NoteListPage;
