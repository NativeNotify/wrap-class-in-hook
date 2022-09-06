import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';

function wrapClassInHook(Component) {
  return function WrappedComponent(props) {
    registerNNPushToken(your-app-id, 'your-app-token');
    return <Component />
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default wrapClassInHook(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
