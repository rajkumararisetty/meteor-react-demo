import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextInput } from '../../../../imports/ui/components/common';
configure({ adapter: new Adapter() });

let props = { label: "test", name: "test", onChange: () => (true)};

describe('Test TextInt is rendering', () => {
  const Input = shallow(<TextInput {...props} />);
  it('<TextInput /> should render', () => {
    expect(Input.exists()).toBe(true)
  });
});
