import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './NoteCard.style';

const NoteCard = ({note}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Icon name="calendar-alt" size={15}/>
          <Text style={styles.dateText}>{note.date}</Text>
        </View>
        <Icon name="map-pin" size={15}/>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{note.title}</Text>
        <Text style={styles.description}>{note.description}</Text>
      </View>
    </View>
  );
};

export default NoteCard;
