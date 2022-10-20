import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Title from '../../components/Title/Title';

import styles from './NoteDetailCard.style';

const NoteDetailCard = ({icon, text, highlighted, style, textStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon style={styles.icon} name={icon} size={25} />
      {highlighted ? (
        <Title text={text} />
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </View>
  );
};

export default NoteDetailCard;
