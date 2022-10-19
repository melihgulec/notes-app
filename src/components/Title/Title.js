import React from 'react';
import {Text} from 'react-native';

import styles from './Title.style';

const Title = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default Title;
