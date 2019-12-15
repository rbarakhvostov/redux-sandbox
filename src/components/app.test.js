import React from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './counter';
import reducer from '../reducer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  it ('renders without crashing', () => {
    const store = createStore(reducer);
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
                  
                  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
