import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './DetailBottomBar.style';

const DetailBottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Icon name={'share-social-outline'} size={18} />
        <Text style={styles.text}>Paylaş</Text>
      </View>
      <View style={styles.item}>
        <Icon name={'trash-bin-outline'} size={18} />
        <Text style={styles.text}>Sil</Text>
      </View>
      <View style={styles.item}>
        <Icon name={'heart-outline'} size={18} />
        <Text style={styles.text}>Favoriler</Text>
      </View>
    </View>
  );
};
1;
export default DetailBottomBar;
