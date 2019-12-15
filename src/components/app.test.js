import React from 'react';
import App from './app';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
