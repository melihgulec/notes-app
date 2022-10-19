import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';
import styles from './AddNotPage.style';
import Title from '../../components/Title/Title';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import BasicButton from '../../components/BasicButton/BasicButton';

const AddNotePage = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon.Button
          name={'arrow-back'}
          style={styles.iconBtn}
          onPress={navigateBack}
          backgroundColor={'transparent'}
          color={Colors.black}
          size={33}
        />
        <Title style={styles.titleContainer} text={'Add Note'} />
      </View>
      <WhiteSpace />
      <InputWithLabel label={'Title'} placeholder={'The title of a note'} />
      <WhiteSpace />
      <InputWithLabel
        label={'Description'}
        multiLine
        numberOfLines={15}
        placeholder={'Type something'}
      />
      <WhiteSpace />
      <BasicButton text={'Create'} />
    </View>
  );
};

export default AddNotePage;
