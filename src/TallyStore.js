import Dispatcher from './Dispatcher';

const tally = {
  count: 0,
};

const increment = () => {
  tally.count += 1;
};

const decrement = () => {
  tally.count -= 1;
};

const zero = () => {
  tally.count = 0;
};

class TallyStore {
  getTally = () => ({ ...tally });
}

const instance = new TallyStore();
export default instance;

const handleAction = (action) => {
  switch (action.type) {
    case 'INCREMENT':
      increment();
      break;
    case 'DECREMENT':
      decrement();
      break;
    case 'ZERO':
      zero();
      break;
    default:
    // do nothing
  }
};

Dispatcher.register(handleAction);
