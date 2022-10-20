import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import styles from './NoteCard.style';
import Title from '../Title/Title';

const NoteCard = ({note, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Icon name="calendar-sharp" size={15} />
          <Text style={styles.dateText}>{note.date}</Text>
        </View>
        <Menu>
          <MenuTrigger
            children={<Icon name={'ellipsis-horizontal'} size={15} />}
          />
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{note.title}</Text>
        <Text numberOfLines={7} style={styles.description}>
          {note.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default NoteCard;
