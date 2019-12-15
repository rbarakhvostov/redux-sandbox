import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './counter';
import reducer from '../reducer';

describe('<App />', () => {
  it ('renders without crashing', () => {
    const container = document.createElement('div');
    const store = createStore(reducer);
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      container
    );
  });
});
