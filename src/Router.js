import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NoteList from './pages/NoteListPage/NoteListPage';
import HeaderLeft from './components/Header/HeaderLeft/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight/HeaderRight';
import AddNotePage from './pages/AddNotePage/AddNotePage';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          title: '',
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}>
        <Stack.Screen name="NoteListPage" component={NoteList} />
        <Stack.Screen name="AddNotePage" component={AddNotePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
