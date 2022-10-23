import PushNotification from 'react-native-push-notification';

const createLocalNotificationSchedule = (
  title,
  message,
  date,
  channelId = '1',
) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message, // (required)
    date: date, //new Date(Date.now() + 5 * 1000), // in 60 secs
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    channelId: channelId,
  });
};

export {createLocalNotificationSchedule};
