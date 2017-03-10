import {createStore} from 'redux';
import swearCount from './reducers/swearCount';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(swearCount);

wrapStore(store, {
  portName: 'swear'
});
