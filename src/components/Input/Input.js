import React from 'react';
import {TextInput} from 'react-native';
import Colors from '../../constants/Colors';

import styles from './Input.style';

const Input = ({
  placeholder,
  onChangeText,
  multiLine,
  numberOfLines,
  style,
}) => {
  return (
    <TextInput
      multiline={multiLine}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.darkGrey}
      style={[styles.container, style]}
    />
  );
};

export default Input;
