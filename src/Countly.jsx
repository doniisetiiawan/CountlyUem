import React from 'react';
import { connect, Provider } from 'react-redux';
import * as actions from './actions';
import store from './store';
import Counter from './Counter';

const mapStateToProps = (state) => ({
  count: state.count,
});

const CounterContainer = connect(
  mapStateToProps,
  actions,
)(Counter);

const Countly = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

export default Countly;
