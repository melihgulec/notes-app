import React from 'react';
import {View, Text, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ClickableCard.style';

const ClickableCard = ({
  iconName,
  text,
  onPress,
  style,
  textContainerStyle,
  isPlaceholder,
}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Icon name={iconName} style={styles.icon} size={25} />
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={isPlaceholder ? styles.placeHolderText : styles.text}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ClickableCard;
