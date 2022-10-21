import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './BottomBar.style';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.item}>
        <Icon name={'share-social-outline'} size={18} />
        <Text style={styles.text}>Paylaş</Text>
      </Pressable>
      <Pressable style={styles.item}>
        <Icon name={'trash-bin-outline'} size={18} />
        <Text style={styles.text}>Sil</Text>
      </Pressable>
      <Pressable style={styles.item}>
        <Icon name={'heart-outline'} size={18} />
        <Text style={styles.text}>Favoriler</Text>
      </Pressable>
    </View>
  );
};

export default BottomBar;
