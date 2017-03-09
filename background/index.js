import {createStore} from 'redux';
import countSwears from './reducers/countSwears';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(countSwears, {});

wrapStore(store, {
  portName: 'swears'
});
