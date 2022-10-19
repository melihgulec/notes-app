import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import BasicButton from '../../components/BasicButton/BasicButton';
import ChipBadgeButton from '../../components/ChipBadgeButton/ChipBadgeButton';
import NoteCard from '../../components/NoteCard/NoteCard';

import Title from '../../components/Title/Title';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import styles from './NoteListPage.style';
import data from '../../data/noteData';
import Icon from 'react-native-vector-icons/Ionicons';

const NoteListPage = ({navigation}) => {
  const renderNoteCards = item => {
    return <NoteCard note={item.item} />;
  };

  const navigateAddNotePage = () => {
    navigation.navigate('AddNotePage');
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={data}
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
              icon={'+'}
              onPress={navigateAddNotePage}
            />
          </View>
        </View>
      )}
      ListFooterComponent={() => <WhiteSpace />}
    />
  );
};

export default NoteListPage;
