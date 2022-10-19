import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './BasicButton.style';

const BasicButton = ({text, iconName, onPress, children}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        android_ripple={{color: Colors.black, borderless: false}}
        onPress={onPress}>
        {iconName && text ? (
          <View style={styles.iconAndTextContainer}>
            <Icon style={styles.icon} name={iconName} size={18} />
            <Text style={styles.text}>{text}</Text>
          </View>
        ) : (
          text && <Text style={styles.text}>{text}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default BasicButton;
