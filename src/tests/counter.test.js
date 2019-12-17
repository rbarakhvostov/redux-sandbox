import React from 'react';
import { Counter } from '../components/counter';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Counter />', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<Counter />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
