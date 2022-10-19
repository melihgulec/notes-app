import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import styles from './NoteCard.style';

const NoteCard = ({note}) => {
  return (
    <View style={styles.container}>
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
        <Text style={styles.description}>{note.description}</Text>
      </View>
    </View>
  );
};

export default NoteCard;
