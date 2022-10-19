import React from 'react';
import {View, StyleSheet} from 'react-native';

const WhiteSpace = ({horizontal}) => {
  return (
    <View
      style={horizontal ? styles.containerHorizontal : styles.containerVertical}
    />
  );
};

const styles = StyleSheet.create({
  containerVertical: {
    marginVertical: 12,
  },
  containerHorizontal: {
    marginHorizontal: 12,
  },
});

export default WhiteSpace;
