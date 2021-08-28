import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import RippleTouchable from '../../src/index';

export default function App() {
  return (
    <View style={styles.container}>
      <RippleTouchable onPress={() => {}} style={{ width: 240, height: 48 }}>
        <Text>TEST BUTTON</Text>
      </RippleTouchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
