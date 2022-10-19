import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

import styles from './BasicButton.style';

const BasicButton = ({text, icon, onPress, children}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        android_ripple={{color: Colors.black, borderless: false}}
        onPress={onPress}>
        {icon && text ? (
          <View style={styles.iconAndTextContainer}>
            <Text style={styles.icon}>{icon}</Text>
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
