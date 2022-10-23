import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TabBar.style';

const TabBar = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {children.map((tab, index) => (
          <TouchableOpacity
            onPress={() => setActiveTab(index)}
            style={[styles.item, activeTab === index && styles.activeTabBorder]}
            key={index}>
            <Text
              style={[
                styles.titles,
                activeTab === index && styles.activeTabText,
              ]}>
              {tab.props.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tabContents}>{children[activeTab]}</View>
    </View>
  );
};

TabBar.Tab = ({children, title}) => {
  return <View>{children}</View>;
};

export default TabBar;
