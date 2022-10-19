import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';

import Router from './Router';

const Wrapper = () => {
  return (
    <MenuProvider>
      <Router />
    </MenuProvider>
  );
};

export default Wrapper;
