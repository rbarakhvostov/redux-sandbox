import React from 'react';
import App from '../components/app';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import reducer from '../reducer';

describe('Application', () => {
  it ('renders without crashing', () => {
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it ('h2 renders without crashing', () => {
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find('h2').text()).toEqual('0');
  });
});
