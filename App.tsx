/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigator } from './src/utils/navigation/navigator';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Navigator />
    </GestureHandlerRootView>
  );
}

export default App;
