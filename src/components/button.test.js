import React from 'react';
import App from '../components/app';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reducer from '../reducer';
import { mockRandom, resetMockRandom } from 'jest-mock-random';

describe('BUTTON', () => {
  it ('test DEC button functionality', () => {
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('#dec').simulate('click');
    wrapper.find('#dec').simulate('click');
    expect(wrapper.find('h2').text()).toEqual('-2');
  });

  it ('test INC button functionality', () => {
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('#inc').simulate('click');
    wrapper.find('#inc').simulate('click');

    expect(wrapper.find('h2').text()).toEqual('2');
  });

  it ('test RND button functionality', () => {
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    mockRandom(0.36);

    wrapper.find('#rnd').simulate('click');
    wrapper.find('#rnd').simulate('click');
    wrapper.find('#rnd').simulate('click');

    expect(wrapper.find('h2').text()).toEqual('9');

    resetMockRandom();
  });
});
