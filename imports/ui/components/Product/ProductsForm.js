import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../common/index';
import ReactLoading from 'react-loading';

// ProductsForm component - represents the Product Form
export const ProductsForm = ({ product, onChange, saveFormSubmit, errors, addLoading }) => {
  return (
      <form>
          <div className="row">
            <div className="form-group">
              <h3>Add Product</h3>
            </div>
          </div>
            <TextInput name="name"
                       label="Name*:"
                       placeholder="Enter Name"
                       value={product.name}
                       onChange={onChange}
                       error={errors.name}
            />
            <TextInput name="quantity"
                       label="Quantity*:"
                       placeholder="Enter Quantity"
                       type="number"
                       value={product.quantity}
                       onChange={onChange}
                       error={errors.quantity}
            />
            <TextInput name="price"
                       label="Price*:"
                       placeholder="Enter Price"
                       type="number"
                       value={product.price}
                       onChange={onChange}
                       error={errors.price}
            />
          <div className="row">
            <div className="form-group">
              {addLoading ? <ReactLoading type="spin" color="#444"  height={30} width={30} /> :
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveFormSubmit}
                >
                  Add
                </button>}

            </div>
          </div>
      </form>
  );
};

ProductsForm.propTypes = {
  errors: PropTypes.object,
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  saveFormSubmit: PropTypes.func.isRequired,
  addLoading: PropTypes.bool,
};
