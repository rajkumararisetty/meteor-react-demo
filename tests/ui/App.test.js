import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../imports/ui/App';
configure({ adapter: new Adapter() });

let props = { };

describe('Test App is rendering', () => {
  const Input = shallow(<App {...props} />);
  it('<App /> should render', () => {
    expect(Input.exists()).toBe(true)
  });
});
