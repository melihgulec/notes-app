import React from 'react';
import {Modal, Text, View} from 'react-native';

import styles from './CustomDialog.style';
import Icon from 'react-native-vector-icons/Ionicons';
import BasicButton from '../../components/BasicButton/BasicButton';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';

export default function CustomAlert({
  title,
  subtitle,
  visibility,
  dismissAlert,
  onOkPress,
  iconName,
}) {
  return (
    <Modal visible={visibility} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.baseContainer}>
          <View style={styles.header}>
            <Icon name={iconName} size={30} style={styles.icon} />
            <Text style={styles.headText}>{title}</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={styles.contentText}>{subtitle}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <BasicButton
                text={'OK'}
                style={[styles.button, styles.okButton]}
                onPress={onOkPress}
              />
              <WhiteSpace horizontal />
              <BasicButton
                text={'CANCEL'}
                style={[styles.button, styles.cancelButton]}
                onPress={() => dismissAlert(false)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
