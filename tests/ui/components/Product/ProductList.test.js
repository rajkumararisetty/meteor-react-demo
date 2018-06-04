import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductsList from '../../../../imports/ui/components/Product/ProductsList';
configure({ adapter: new Adapter() });

let props = {
  allProducts: [{
    _id: 1,
    name: 'test',
    quantity: 10,
    price: 100
  }],
  listLoading: false
};

describe('Test ProductsList is rendering', () => {
  const Input = shallow(<ProductsList {...props} />);
  it('<ProductsList /> should render', () => {
    expect(Input.exists()).toBe(true)
  });
});
