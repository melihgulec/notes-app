import React from 'react';
import {View, Text} from 'react-native';
import Input from '../Input/Input';

import styles from './InputWithLabel.style';

const InputWithLabel = ({
  label,
  placeholder,
  multiLine,
  numberOfLines,
  style,
  onChangeText,
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiLine={multiLine}
        numberOfLines={numberOfLines}
        style={multiLine && styles.inputStyle}
      />
    </View>
  );
};

export default InputWithLabel;
