import React from 'react';

import TabBar from '../../components/TabBar/TabBar';
import NoteListPage from '../NoteListPage/NoteListPage';
import AddNotePage from '../AddNotePage/AddNotePage';

const HomePage = ({navigation}) => {
  return (
    <TabBar>
      <TabBar.Tab title={'All'}>
        <NoteListPage navigation={navigation} />
      </TabBar.Tab>
      <TabBar.Tab title={'Reminders'}>
      </TabBar.Tab>
      <TabBar.Tab title={'To-Dos'}>
      </TabBar.Tab>
    </TabBar>
  );
};

export default HomePage;
