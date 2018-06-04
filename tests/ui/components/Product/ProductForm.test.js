import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductsForm } from '../../../../imports/ui/components/Product/ProductsForm';
configure({ adapter: new Adapter() });

let props = { product: {}, onChange: () => (true), saveFormSubmit: () => (true), errors: {}, addLoading:false };

describe('Test ProductsForm is rendering', () => {
  const Input = shallow(<ProductsForm {...props} />);
  it('<ProductsForm /> should render', () => {
    expect(Input.exists()).toBe(true)
  });
});
