import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import BasicButton from '../BasicButton/BasicButton';
import WhiteSpace from '../WhiteSpace/WhiteSpace';
import ClickableCard from '../ClickableCard/ClickableCard';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './ReminderDialog.style';

const ReminderDialog = ({visibility, setVisibility}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Modal visible={visibility} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.baseContainer}>
          <View style={styles.header}>
            <Icon name={'alarm-outline'} size={30} style={styles.icon} />
            <Text style={styles.headText}>Set Reminder</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <ClickableCard
                iconName={'calendar-outline'}
                textContainerStyle={styles.clickableCardTextContainer}
                text={'Select date'}
                isPlaceholder
                onPress={() => {
                  setMode('date');
                  setShowDatePicker(true);
                }}
              />
              <WhiteSpace />
              <ClickableCard
                iconName={'alarm-outline'}
                isPlaceholder
                text={'Select time'}
                textContainerStyle={styles.clickableCardTextContainer}
                onPress={() => {
                  setMode('time');
                  setShowDatePicker(true);
                }}
              />
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onDateChange}
                />
              )}
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

export default ReminderDialog;
