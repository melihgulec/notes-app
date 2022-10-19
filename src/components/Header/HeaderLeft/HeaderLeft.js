import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/Colors';

const HeaderLeft = () => {
  return (
    <Icon.Button
      name="menu"
      backgroundColor={'transparent'}
      color={Colors.black}
      size={22}
    />
  );
};

export default HeaderLeft;
