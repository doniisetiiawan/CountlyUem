import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { increment, decrement, zero } from './actions';
import store from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tally: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    fontSize: 25,
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

class Countly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tally: store.getTally(),
    };
  }

  componentDidMount = () => {
    store.addChangeListener(this.updateState);
  };

  componentWillUnmount = () => {
    store.removeChangeListener(this.updateState);
  };

  updateState = () => {
    this.setState({
      tally: store.getTally(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Countly</Text>
        <Text style={styles.tally}>
          Tally: {this.state.tally.count}
        </Text>
        <TouchableOpacity
          onPress={() => store.dispatch(increment())}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => store.dispatch(decrement())}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => store.dispatch(zero())}
          style={styles.button}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Countly;
