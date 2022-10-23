import React from 'react';
import {Modal, Text, View} from 'react-native';

import styles from './CategoryDialog.style';

import Icon from 'react-native-vector-icons/Ionicons';
import BasicButton from '../../components/BasicButton/BasicButton';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import ClickableCard from '../ClickableCard/ClickableCard';

const CategoryDialog = ({visibility, setVisibility}) => {
  return (
    <Modal visible={visibility} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.baseContainer}>
          <View style={styles.header}>
            <Icon name={'book-outline'} size={30} style={styles.icon} />
            <Text style={styles.headText}>Categories</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <ClickableCard
                iconName={'calendar-outline'}
                textContainerStyle={styles.clickableCardTextContainer}
                text={'Select date'}
                isPlaceholder
                onPress={() => {}}
              />
              <WhiteSpace />
              <ClickableCard
                iconName={'alarm-outline'}
                isPlaceholder
                text={'Select time'}
                textContainerStyle={styles.clickableCardTextContainer}
                onPress={() => {}}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <BasicButton
                text={'OK'}
                style={[styles.button, styles.okButton]}
              />
              <WhiteSpace horizontal />
              <BasicButton
                text={'CANCEL'}
                style={[styles.button, styles.cancelButton]}
                onPress={() => setVisibility(false)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryDialog;
