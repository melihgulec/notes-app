import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../../Avatar/Avatar';

import styles from './HeaderRight.style';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} size={20} name={'search'} />
    </View>
  );
};

export default HeaderRight;
