import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import BasicButton from '../BasicButton/BasicButton';
import WhiteSpace from '../WhiteSpace/WhiteSpace';
import ClickableCard from '../ClickableCard/ClickableCard';
import DateTimePicker from '@react-native-community/datetimepicker';
import {createLocalNotificationSchedule} from '../../services/NotificationService';

import styles from './ReminderDialog.style';
import moment from 'moment/moment';
import PushNotification from 'react-native-push-notification';

const ReminderDialog = ({visibility, setVisibility}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePlaceholder, setDatePlaceholder] = useState('Select date');
  const [timePlaceholder, setTimePlaceholder] = useState('Select time');

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    const currentDate = selectedDate || date;
    setDate(currentDate);

    if (mode === 'date') {
      let formattedDate = moment(currentDate).format('DD ddd, YYYY');
      setDatePlaceholder(formattedDate);
    } else if (mode === 'time') {
      let formattedDate = moment(currentDate).format('HH:mm');
      setTimePlaceholder(formattedDate);
    }
  };

  const onOkPress = () => {
    console.log(date);
    createLocalNotificationSchedule('Zamanlanmış bildirim', 'İçerik', date);

    PushNotification.getScheduledLocalNotifications(cb => {
      console.log(cb);
    });
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
                text={datePlaceholder}
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
                text={timePlaceholder}
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
                onPress={onOkPress}
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
